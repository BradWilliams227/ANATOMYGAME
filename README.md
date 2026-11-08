# ANAT-OOPS! — Rescue Arcade (rebuilt v3)

A lightweight six-question anatomy game. Original cartoon illustrations, short time-pressure rounds, answer reveals, every submitted attempt preserved, and a post-game learning review. No third-party packages, fonts, APIs, accounts or network dependencies.

## IMPORTANT: How to launch the game

**Simplest: open `PLAY-ANAT-OOPS.html` in a browser.** This is a complete standalone version; the HTML contains its own CSS and JavaScript. You may copy this single file to a different folder and it will still look and play correctly.

**For editing:** extract the **entire ZIP** before opening `index.html`. Keep `index.html`, `styles.css`, and `game.js` in the **same folder**. Do not open a preview or separately download only `index.html`. The three-file version is editable and equivalent to the standalone version.

Optional local server: run `python3 -m http.server 8000` in the extracted folder, then visit http://localhost:8000/index.html. On Windows use `py -m http.server 8000`. A server is not needed to play the standalone version. Browser policies vary for `file://` localStorage, so daily scores may only persist reliably on a local server.

If `styles.css` or `game.js` is missing, `index.html` shows a prominent diagnostic warning instead of silently appearing as an unstyled, non-functional page.

## Controls and rules

- **Play today's six**: six anatomy questions, 25 seconds each, one saved completed attempt per local day/browser. Saved result opens on subsequent visits.
- **Try demo mode**: unlimited replays and 20/25/30/45-second timer choices. Does not overwrite daily results.
- Submit an answer using **Enter** or the **GO** button. Wrong submissions provide quick feedback and a 650 ms anti-spam delay; retry while time remains.
- Accepted responses use educator-defined synonyms with case, accent and punctuation normalisation; no loose fuzzy matching.
- Correct answer scores `round(350 + 650 × seconds_remaining / total_seconds)`, up to 1,000 per question. Timed out questions score zero.
- A correct submission shows the official answer and reward for about 1.2 seconds. A timeout immediately stops accepting answers, reveals the correct answer for about **2.2 seconds**, and progresses automatically.
- After six questions the review shows **every original submitted answer**, whether it was accepted, a distinct unsubmitted timeout draft (if any), the correct answer and the educational explanation. Previous daily results with no answer history still open with a notice.
- Mobile prioritises the **question and answer field above the cartoon**, so players can interact on short-height phones. The illustration remains visible beneath the input.

## Files

- `PLAY-ANAT-OOPS.html` — **fully standalone**, designed for double-clicking, sharing and playing. Works even if all other files are absent.
- `index.html` — editable multi-file app entry point.
- `styles.css` — redesigned styles, responsive layout, microinteractions and reduced-motion support.
- `game.js` — existing six draft questions, original SVG scenes, state management, timer, scoring, answer validation and review.
- `README.md` — usage, constraints and test guidance.

When editing the multi-file source, `PLAY-ANAT-OOPS.html` is **not automatically updated**. Rebuild the standalone version by inlining the updated CSS and JS into `index.html`, or use the provided standalone file without editing it.

## Verification checklist

1. Extract the ZIP into a single folder. Open both `index.html` and `PLAY-ANAT-OOPS.html` and confirm the colourful styled landing page appears and buttons work.
2. Start demo mode and submit `radial nerve` then `triceps` for question 1. A wrong attempt followed by a correct synonym should score **once**, and both exact submitted texts should appear in the results review.
3. Type an incomplete answer on a new question without submitting it. On timeout the answer should appear immediately and remain visible briefly. Review should show the partial draft, labelled **not submitted**.
4. Timeout without typing: review should say **No answer submitted (time expired)**.
5. Submit a wrong answer but do not edit it before timeout: the wrong submission should appear once, without a duplicated timeout draft.
6. Try repeated Enter presses and boundary-time submissions: no duplicate scores/transitions; answers received after deadline never score.
7. Verify demo replay, daily completed-result persistence, older saved results, safe rendering of user input, keyboard navigation and reduced-motion.
8. On phones (particularly 320×568 and 375×667), the prompt and input should be visible before the artwork. Also check the *actual* soft keyboard on a physical device.

## Educational and technical limitations

All six anatomy questions are **educator-review drafts**, not validated assessments. Have an appropriate anatomy educator independently check the wording, clinical accuracy, aliases, explanations and difficulty before formal use. Speed and score are not validated measures of retention. The same six questions repeat in daily mode, so new curated content is the highest-value future product upgrade.

Daily results are stored in the player's local browser, not synchronised or protected across devices. Existing daily results use the historical `anat-oops:v1:daily:YYYY-MM-DD` key for compatibility. `file://` storage support varies by browser. Some browser configurations restrict local storage entirely; the game still plays when storage is unavailable but cannot promise saved daily results.

This project uses only trusted developer-authored SVG markup in scene rendering. User-generated response text is displayed as text, never as interpreted HTML. It includes keyboard focus styling and `prefers-reduced-motion` fallbacks.
