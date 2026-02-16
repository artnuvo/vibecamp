# VibeCamp (Tribe Camp) Website

A Cloudflare Workers-hosted static website for Tribe Camp — a family retreat gathering near Barcelona.

🔗 **Live Site**: https://vibecamp.artpi.workers.dev/  
📁 **Repository**: `~/GIT/vibecamp`

---

## ⚠️ AUTO-DEPLOY ENABLED

**This repository auto-deploys to production on every push to `main`.**

The website at https://vibecamp.artpi.workers.dev/ updates immediately when code is pushed.

**→ Before pushing any changes, ask for confirmation from the team.**

---

---

## What is Tribe Camp?

Tribe Camp is an experiment in intergenerational family living. It's a week-long gathering where families come together to build, create, learn from each other, and rediscover the joy of raising children in community.

### The Core Idea

> "Raising kids should feel like magic. Not survival. Not management. Magic."

Modern parenting often isolates families. Tribe Camp brings back the village — a space where:
- Teenagers mentor toddlers
- New parents learn from experienced ones
- Families from different countries and cultures connect
- Everyone contributes to building something that lasts

### The Manifesto

1. **Intergenerational wisdom flows both ways** — Everyone has something to teach
2. **Children are included, not segregated** — No "kids' clubs"; kids belong in every space
3. **We leave things better than we found them** — Build playgrounds, plant gardens, create lasting value
4. **Joy is the point** — Not productivity. Dance in the forest. Make terrible art. Have fun.
5. **The village is global** — Families from Singapore to Barcelona, connected across borders
6. **We're building the future by living it now** — A prototype of the world we want our grandchildren to inherit

### What Happens at Tribe Camp?

- 🔨 **Building projects** — Treehouses, playgrounds, structures that last
- 🎵 **Music & dance** — Jam sessions, forest dances, instruments for all ages
- 🎨 **Creative arts** — Face paint, glitter, vision boards, LEGO towers
- 🌊 **Nature exploration** — Beach trips, forest walks, swimming
- 👨‍🍳 **Communal cooking** — Shared meals, recipes from around the world
- 💡 **Wisdom sharing** — Workshops led by participants, for participants

### The Vibe

- 🌲 Forest dances (daytime, not nightlife)
- 🏠 Communal living and shared childcare
- 🌍 English-speaking, internationally mixed
- 🔧 DIY spirit — everyone contributes
- ☀️ Mediterranean summer (beach + pool)
- ✨ Low substances — clear-headed, present together
- 👶 All ages welcome (babies to grandparents)
- 🎸 Bring instruments — music everywhere

---

## First Edition: Spain 2025

**Location**: Casa Tio, a villa in the hills near Barcelona  
**Dates**: Tentatively mid-to-late July 2025 (flexible, coordinating with interested families)  
**Capacity**: 8-10 families  
**Status**: Seeking founding families to commit with deposits to secure the venue

### What We're Looking For

- Families with children of any age (babies to teens)
- People excited about building, creating, and contributing
- Those who resonate with the manifesto
- Early commitment (deposit) to help secure Casa Tio
- Comfort with ambiguity — we're building this together

---

## Project Context

### From Maria (Project Owner)

Maria Piszek is the founder and visionary behind Tribe Camp. This project emerged from her desire to create something different from typical family vacations or resorts.

**Key insights from Maria:**

> "I don't really know the exact dates or prices yet, we've been thinking about July 19th-25th but some of the people we've invited can't come at this time."

> "I want the website to carry the overall vibe of the event and tell everyone what it's going to be about — put up a manifesto perhaps?"

> "We need a few committed families to put down deposit to secure the dates at Casa Tio, which will happen outside of this website."

> "I'm finding it difficult to invite people to something when I don't know how to explain what it is going to be about. The main goal of this website is to convey the vibe I'm going for, so that I can use it as a reference and send a link to someone saying 'this is what I'm thinking about, we need a few committed families in order to make it happen, are you in?'"

> "Once we get that sorted out we can think about the details like pricing etc."

**The website's purpose:**
1. Convey the *vibe* and philosophy of Tribe Camp
2. Serve as a shareable reference when inviting families
3. Help Maria explain what she's building without needing all details finalized
4. Attract founding families who resonate with the vision

---

## Technical Setup

### Cloudflare Workers Deployment

This is a static site served via Cloudflare Workers.

**Files:**
- `index.html` — The complete website (single-page manifesto site)
- `wrangler.toml` — Cloudflare Workers configuration
- `src/index.js` — Worker script for serving assets

### Deployment Commands

```bash
# Install Wrangler (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler deploy

# Or for local development
wrangler dev
```

### Structure

```
vibecamp/
├── index.html          # Main website
├── wrangler.toml       # Cloudflare config
├── src/
│   └── index.js        # Worker script
├── README.md           # This file
├── AGENTS.md           # Symlink to README
└── CLAUDE.md           # Symlink to README
```

---

## Design Notes

- **Colors**: Forest green (#2d4a3e), sage (#7a9b76), sand (#f5f1e8), terracotta (#c4705a), sunset (#e8a87c), cream (#faf8f3)
- **Fonts**: Crimson Pro (serif body), Space Grotesk (sans-serif headers)
- **Style**: Earthy, warm, mystical, spacious
- **Sections**: Hero → Manifesto → What We're Building → The Bigger Dream → Be One of the First → The Vibe → Connect

---

## Contact

For questions or to express interest:
- Email: hello@tribecamp.org
- Maria Piszek (founder)

---

## Future Enhancements (TODO)

- [ ] Add actual photos of Casa Tio
- [ ] Set up real email forwarding or contact form
- [ ] Add pricing once determined
- [ ] Confirm and lock in July 2025 dates
- [ ] Add application/booking flow
- [ ] Create social media accounts and link them
- [ ] Add testimonials from founding families post-event

---

## Changelog

- **2025-02-16** — Initial manifesto-style website created by Astra (Clawd)
- **2025-02-16** — Migrated to Cloudflare Workers setup

---

*Built with love for families who believe in the magic of raising kids together.* 🌲✨