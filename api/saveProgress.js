import { progress } from '../drizzle/schema.js';
import { authenticateUser } from './_apiUtils.js';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const user = await authenticateUser(req);
    const { progressData } = req.body;

    if (!progressData) {
      return res.status(400).json({ error: 'Progress data is required' });
    }

    const sql = neon(process.env.NEON_DB_URL);
    const db = drizzle(sql);

    // Check if progress already exists for the user
    const existingProgress = await db.select()
      .from(progress)
      .where(eq(progress.userId, user.id))
      .limit(1);

    if (existingProgress.length > 0) {
      // Update existing progress
      await db.update(progress)
        .set({ progressData, updatedAt: new Date() })
        .where(eq(progress.userId, user.id));
    } else {
      // Insert new progress
      await db.insert(progress).values({
        userId: user.id,
        progressData,
      });
    }

    res.status(200).json({ message: 'Progress saved' });
  } catch (error) {
    console.error('Error saving progress:', error);
    if (error.message.includes('Authorization') || error.message.includes('token')) {
      res.status(401).json({ error: 'Authentication failed' });
    } else {
      res.status(500).json({ error: 'Error saving progress' });
    }
  }
}