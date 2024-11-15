import { progress } from '../drizzle/schema.js';
import { authenticateUser } from './_apiUtils.js';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const user = await authenticateUser(req);

    const sql = neon(process.env.NEON_DB_URL);
    const db = drizzle(sql);

    const userProgress = await db.select()
      .from(progress)
      .where(eq(progress.userId, user.id))
      .limit(1);

    if (userProgress.length > 0) {
      res.status(200).json(userProgress[0].progressData);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error fetching progress:', error);
    if (error.message.includes('Authorization') || error.message.includes('token')) {
      res.status(401).json({ error: 'Authentication failed' });
    } else {
      res.status(500).json({ error: 'Error fetching progress' });
    }
  }
}