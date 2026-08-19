# TDOA write-up — remaining sections (not published)

Underscore prefix + .md extension keep this out of getAllPosts twice over.
Paste these back into tdoa-geolocation.mdx when you write them.

## Where the time difference actually comes from

~230 words. ONE idea: slide one recording past the other; the lag with the
best match is the delay. This is the section deferred by the geometry-first
ordering, so make it land as a payoff.
Why it survives noise: noise is uncorrelated between receivers, the signal is
correlated. Budget: 1 equation, max.
Close on the honest caveat: the correlation peak is only as sharp as the
signal's bandwidth is wide — narrowband gives a broad, ambiguous peak. That is
what GCC-PHAT fixes. ONE sentence, then stop. It's its own post.

## What breaks it

~230 words. THREE failure modes, not six. In this order:
1. Clock sync — 1 ns of receiver clock error is ~30 cm of position error.
   This is the whole game; it belongs first.
2. Sampling resolution — tau is quantized by sample rate. At 10 MSPS one
   sample is 100 ns is ~30 m. Sub-sample peak interpolation, one sentence.
3. Geometry — call back to what the reader FELT in the demo (list item 3).
   Same tau error maps to small position error inside the triangle, huge error
   along the baseline extensions. Name GDOP, say it's the next post, stop.

## What's next

~90 words. What you'd build next. What the demo does NOT model — no noise, no
real signal, perfect clocks. Say that out loud; it reads as rigor.
Then the two follow-ups: GCC-PHAT and GDOP.
