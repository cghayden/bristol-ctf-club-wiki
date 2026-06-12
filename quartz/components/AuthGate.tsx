import { QuartzComponent, QuartzComponentConstructor } from "./types"

const AuthGate: QuartzComponent = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html:not(.bristol-auth-ok) body {
              overflow: hidden !important;
            }

            #bristol-auth-overlay {
              position: fixed;
              inset: 0;
              z-index: 999999;
              display: flex;
              align-items: center;
              justify-content: center;
              background:
                radial-gradient(circle at 20% 80%, rgba(109, 218, 255, 0.85), transparent 30%),
                radial-gradient(circle at 62% 55%, rgba(255, 180, 35, 0.45), transparent 18%),
                linear-gradient(135deg, #005cab 0%, #0aa4e8 38%, #0050a7 100%);
              font-family: "Segoe UI", Arial, sans-serif;
            }

            #bristol-auth-box {
              width: min(420px, calc(100vw - 32px));
              background: rgba(236, 246, 255, 0.95);
              border: 1px solid rgba(255, 255, 255, 0.98);
              border-radius: 9px;
              box-shadow:
                0 20px 55px rgba(0, 0, 0, 0.42),
                inset 0 1px rgba(255, 255, 255, 0.95);
              overflow: hidden;
            }

            #bristol-auth-title {
              height: 38px;
              display: flex;
              align-items: center;
              padding: 0 14px;
              color: white;
              font-weight: 700;
              font-size: 0.95rem;
              background: linear-gradient(
                to bottom,
                #7db5e8 0%,
                #2f78bd 45%,
                #1c5e9e 46%,
                #4da3e6 100%
              );
              border-bottom: 1px solid #205f9b;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
            }

            #bristol-auth-content {
              padding: 28px;
              color: #111;
            }

            #bristol-auth-content h1 {
              margin: 0 0 0.75rem;
              color: #003f75;
              font-size: 1.7rem;
              line-height: 1.1;
            }

            #bristol-auth-content p {
              margin: 0 0 1rem;
              line-height: 1.45;
            }

            #bristol-auth-input {
              width: 100%;
              height: 42px;
              box-sizing: border-box;
              background: white;
              color: #111;
              border: 1px solid #7f9db9;
              border-radius: 3px;
              box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.18);
              padding: 6px 8px;
              font-size: 1rem;
            }

            #bristol-auth-button {
              margin-top: 1rem;
              width: 100%;
              height: 40px;
              border: 1px solid #8baed0;
              border-radius: 5px;
              background: linear-gradient(#ffffff, #d9e9f7);
              color: #003f75;
              font-weight: 700;
              cursor: pointer;
            }

            #bristol-auth-error {
              display: none;
              margin-top: 0.75rem;
              color: #8b0000;
              font-weight: 700;
            }
          `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              const STORAGE_KEY = "bristol-ctf-auth-ok";
              const PASSWORD_HASH = "0a6594a0d088bbdb2e5b70415933b9ee4bcfe72932c569a88d83094d8e604a13";

              function markAuthed() {
                localStorage.setItem(STORAGE_KEY, "true");
                document.documentElement.classList.add("bristol-auth-ok");
                const overlay = document.getElementById("bristol-auth-overlay");
                if (overlay) overlay.remove();
              }

              async function sha256(text) {
                const encoder = new TextEncoder();
                const data = encoder.encode(text);
                const hashBuffer = await crypto.subtle.digest("SHA-256", data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
              }

              function showGate() {
                const overlay = document.createElement("div");
                overlay.id = "bristol-auth-overlay";
                overlay.innerHTML = \`
                  <div id="bristol-auth-box">
                    <div id="bristol-auth-title">Bristol CTF Club Resources</div>
                    <div id="bristol-auth-content">
                      <h1>Password Required</h1>
                      <p>Enter the club password to access the resources.</p>
                      <input id="bristol-auth-input" type="password" placeholder="Password" autocomplete="current-password" />
                      <button id="bristol-auth-button" type="button">Enter Site</button>
                      <div id="bristol-auth-error">Incorrect password. Try again.</div>
                    </div>
                  </div>
                \`;

                document.body.appendChild(overlay);

                const input = document.getElementById("bristol-auth-input");
                const button = document.getElementById("bristol-auth-button");
                const error = document.getElementById("bristol-auth-error");

                async function checkPassword() {
                  const typedHash = await sha256(input.value);

                  if (typedHash === PASSWORD_HASH) {
                    markAuthed();
                  } else {
                    error.style.display = "block";
                    input.value = "";
                    input.focus();
                  }
                }

                button.addEventListener("click", checkPassword);
                input.addEventListener("keydown", function (event) {
                  if (event.key === "Enter") checkPassword();
                });

                input.focus();
              }

              if (localStorage.getItem(STORAGE_KEY) === "true") {
                document.documentElement.classList.add("bristol-auth-ok");
              } else {
                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", showGate);
                } else {
                  showGate();
                }
              }
            })();
          `,
        }}
      />
    </>
  )
}

export default (() => AuthGate) satisfies QuartzComponentConstructor
