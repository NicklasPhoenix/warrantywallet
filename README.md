# PriceDrop Guard

Never miss a price drop.

Track your purchases, watch for price drops, and claim refunds before the return
window closes.

## Features

- Track purchases via receipt forwarding or product links
- Price drop alerts
- Return window countdowns
- Price history
- Price-match playbook

## Local Development

```bash
npm install
```

Create `.env.local`:

```env
DATABASE_URL="postgresql://user:password@host:5432/pricedropguard"
```

Then run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist API

`POST /api/waitlist`

Body:

```json
{
  "email": "you@email.com",
  "company": "Amazon, Zara",
  "volume": "Weekly",
  "stack": "Electronics",
  "pain": "Missing price drops"
}
```

The API auto-creates a `waitlist` table on first write (Postgres required).
