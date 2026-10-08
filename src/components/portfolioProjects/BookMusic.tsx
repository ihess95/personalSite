import React, { useState } from "react";

interface BookMusicProps {
  mode?: "reflection" | "abstract" | "full" | "sources";
}

/* A separate Vercel project on purpose: the app is React 19 + Tailwind 4 +
   Vite 8 against this site's React 18 + Tailwind 3 + Vite 5, and an iframe
   keeps both on their own dependencies. It serves captured fixtures and
   ships no audio, no cover art and no book text. */
const DEMO_URL = "https://bookmusic.hessdev.io";
const REPO_URL = "https://github.com/ihess95/ebookMusicProject";

/* Not a paper, so the default tab names do not describe it. */
export const sections = {
  abstract: "Overview",
  reflection: "Methodology",
  full: "Live Demo",
  sources: "Technical Reference",
};

/* Links on paper: ink with a brass underline. */
const LINK =
  "font-medium text-paper-ink underline decoration-brass-deep/50 underline-offset-2 transition-colors hover:decoration-brass-deep";

const BookMusic: React.FC<BookMusicProps> = ({ mode = "full" }) => {
  const getModeContent = () => {
    switch (mode) {
      case "abstract":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Music That Follows What You&rsquo;re Reading
            </h2>
            <p>
              This project digests both music and epub ebook files for emotional
              valence and arousal and compares the values of the music file and
              the current point in the text file to provide emotionally
              appropriate music for your reading experience.
            </p>
            <hr className="border-paper-shade" />
            <div>
              <p className="text-[0.95em] text-paper-muted">
                This is just an online demo, as I am not interested in illegally
                hosting copyrighted material. The goal of this demo is to be
                able to share the idea with friends and other interested
                parties. I intend to upload a handful of non-copyrighted songs
                and text so this can be a truly working demo, but first
                I&rsquo;m ironing out kinks.
              </p>
            </div>
          </div>
        );

      case "reflection":
        return (
          <div className="space-y-4">
            <p>
              The backend of this application is built using Python (Flask) and
              a handful of data processing libraries to analyze media for
              emotional values. The application then converts these calculated
              datapoints into comparable datasets, and evaluates for emotional
              signal. The app first does a fast, low effort scan of the ebook in
              question so the user experiences little downtime. This scout scan
              does not handle emotional data and only provides the complex scan
              with the ebook&rsquo;s scaffolding and format. After the first
              scan, we run a more expensive background scan that picks up
              emotional data. The back end of the non-demo application then runs
              data processing scripts to create a character map, which shows, in
              a relatively digestible way, the data the app is working with
              (removed from demo for copyright, as we store textual evidence of
              emotional signal).
            </p>
            <p>
              I am using Beautiful Soup to process the ebook&rsquo;s HTML,
              EbookLib to parse, spaCy to pick up characters, NLTK VADER for
              lexicon analysis, and NRCLex to analyze emotional signal. After
              the initial pipeline was built, I did weeks of troubleshooting and
              double checking with text I have read, using my own emotional
              reading of the text to fact check the algorithm&rsquo;s. One issue
              I was experiencing was the engine&rsquo;s inability to
              differentiate between emotion felt toward someone, and emotion
              felt on someone&rsquo;s behalf. Example: in the Lord of the Rings,
              &ldquo;Sam feared for Frodo,&rdquo; which any reader would take as
              Sam being scared on Frodo&rsquo;s behalf. The engine was reading
              it as &ldquo;Sam fears Frodo,&rdquo; which is plainly untrue. This
              example forced me to rethink my question, I stopped trying to
              analyze &ldquo;does this text read positive&rdquo; and instead
              analyzed for &ldquo;what does this say about the two people on
              &lsquo;screen.&rsquo;&rdquo; I continued my research and
              discovered transformers, which, instead of referencing the
              emotional value of each word independently, measures each word
              within its context. The three transformers used are:
              cardiffnlp/twitter-roberta-base-sentiment-latest,
              bhadresh-savani/distilbert-base-uncased-emotion and
              facebook/bart-large-mnli. Each solves a specific piece of the
              puzzle when accompanied by the lexicon tools. The facebook tool
              scores character relationships, which solved the earlier Frodo-Sam
              lexical interpretation shortcoming. The model trained on Twitter
              handles page level valence, while the remaining distilbert one
              handles emotional categories, which inform the arousal datapoint.
              When I had finally fine-tuned enough that I was getting emotional
              responses that were predictably similar to mine, I was happy with
              moving to the next step.
            </p>
            <p>
              I am still working on a more complex music analysis algorithm,
              currently it just processes with Librosa, which measures RMS
              energy and spectral centroid for loudness and brightness of the
              music, and reports to the main app with its findings.
            </p>
            <p>
              With both (complex ebook processing and simple music processing)
              in place, I worked on getting the demo up on the web. This
              involved piping in static data for the live API to reference
              instead of the backend, stripping copyrighted information, and
              writing a tool to pick the main colors out of the book cover
              artwork. I can generate stand in, non-copyrighted placeholder
              covers that reference recognizable covers, but do not replicate
              them, only referencing their color palettes.
            </p>
          </div>
        );

      case "sources":
        return (
          <div className="space-y-6">
            {/* Credits as label and value pairs, the way a sleeve prints
                them. */}
            <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-2">
              {[
                ["Backend", "Python, Flask and SQLite"],
                ["Frontend", "React 19, TypeScript, Vite and Tailwind CSS 4"],
                ["Parsing", "EbookLib and Beautiful Soup"],
                ["Entities", "spaCy"],
                [
                  "Scoring",
                  "Hugging Face transformers for sentiment, stance and emotion; NLTK VADER and NRCLex as the lexicon layer",
                ],
                ["Audio", "Librosa"],
                ["Graph", "networkx"],
                ["Reading position", "Calibre’s own database"],
              ].map(([term, value]) => (
                <React.Fragment key={term}>
                  <dt className="whitespace-nowrap pt-[0.3em] font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-paper-muted">
                    {term}
                  </dt>
                  <dd>{value}</dd>
                </React.Fragment>
              ))}
            </dl>

            <hr className="border-paper-shade" />

            <p>
              31 books and roughly 24,000 pages analysed, a 600-track music
              library scored, and character maps across two fantasy series (Lord
              of the Rings and the first four books of The Wheel of Time).
            </p>

            <hr className="border-paper-shade" />

            <p className="text-[0.95em] text-paper-muted">
              The demo runs entirely in the browser against captured fixtures.
              There is no backend behind it, because the real one reads a
              personal ebook library and streams audio files. It ships the shape
              of the real data with none of the payload: no audio, no cover
              images and no book text. The transport controls move through the
              playlist but play nothing.
            </p>
          </div>
        );

      case "full":
      default:
        return <BookMusicDemo />;
    }
  };

  return <div className="w-full">{getModeContent()}</div>;
};

const BookMusicDemo = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm text-paper-muted">
          Live demo. Fixtures only, no audio. Best viewed full screen.
        </p>
        <div className="flex gap-3 text-sm">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            Open full screen &#8599;
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            Source &#8599;
          </a>
        </div>
      </div>

      <div className="relative w-full overflow-hidden rounded-sm border border-paper-shade bg-ink shadow-inner">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-cream-muted">
            Loading the demo&hellip;
          </div>
        )}
        <iframe
          src={DEMO_URL}
          title="Book Music demo"
          onLoad={() => setLoaded(true)}
          loading="lazy"
          // The app lays itself out against the viewport height, so it
          // needs a real height, not an aspect ratio. Too short and the
          // playlist and the control bar collide.
          className="block h-[78vh] min-h-[560px] w-full border-0"
        />
      </div>

      <p className="text-xs text-paper-muted">
        The spine on the left fills as you move through the book, and takes its
        colours from the cover. The sparkline at the top right is the emotional
        arc of the pages around your current position. Pick a book from the
        Library to open it at a random page.
      </p>
    </div>
  );
};

export default BookMusic;
