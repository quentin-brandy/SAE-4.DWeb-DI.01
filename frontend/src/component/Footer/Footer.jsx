export default function Footer() {
  return (
    <footer class="bg-background text-textgrey">
      <div class="flex flex-col items-center justify-center gap-8 pt-3 lg:hidden lg:opacity-0">
        <img src="/img/cbslogo.svg" alt="logo cbs" />
        <div>
          <a class=" text-sm" href="#">
            Terms of use
          </a>
          <a class=" text-sm" href="#">
            {" "}
            | Privacy Policy
          </a>
          <br />{" "}
          <a class=" flex justify-center text-sm" href="#">
            | Gérer les cookies
          </a>
        </div>
        <ul class="flex items-center justify-center gap-8">
          <li>
            <a href="#">
              <img
                class="h-auto w-5"
                src="/img/facebooklogo.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                class="h-auto w-5"
                src="/img/twitterlogo.svg"
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                class="h-auto w-5"
                src="/img/youtubelogo.svg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                class="h-auto w-5"
                src="/img/instagramlogo.svg"
                alt="instagam"
              />
            </a>
          </li>
        </ul>
        <p class="mb-2 text-xs">© 2023 Paramount. All rights reserved.</p>
      </div>
      <div class="z-[-16] ml-4  hidden py-16 lg:static lg:block">
        <img class="ml-4 pb-2" src="/img/cbslogo.svg" alt="logo cbs" />
        <div class="ml-4 mt-2 flex items-start justify-start gap-40">
          <ul class="flex flex-col items-start justify-center gap-2">
            <li>
              <h2 class="flex justify-start  text-sm text-white">
                Site Navigation
              </h2>
            </li>
            <li>
              <a class="text-xs" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Shows
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Live TV
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Schedule
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                TV Provider
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Paramount +
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                CBS News
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                CBS Sports
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Shop
              </a>
            </li>
          </ul>
          <ul class="flex flex-col items-start justify-center gap-2">
            <li>
              <h2 class="text-sm text-white ">Privacy & Terms</h2>
            </li>
            <li>
              <a class="text-xs" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Gérer les cookies
              </a>
            </li>
          </ul>
          <ul class="flex flex-col items-start justify-center gap-2">
            <li>
              <h2 class="text-sm text-white ">Information</h2>
            </li>
            <li>
              <a class="text-xs" href="#">
                Help/Contact Us
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Show Feedback
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Casting
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Closed Captioning
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Video Description
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Ratings Guidelines
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                About Paramount
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Careers
              </a>
            </li>
            <li>
              <a class="text-xs" href="#">
                Anti-Bias Statement
              </a>
            </li>
          </ul>

          <ul class="flex flex-col items-center justify-center gap-8">
            <li>
              <h2 class="text-sm text-white ">Follow Us</h2>
            </li>
            <li>
              <ul class="flex  items-center justify-center gap-8">
                <li>
                  <a href="#">
                    <img
                      class="h-auto w-6"
                      src="/img/facebooklogo.svg"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      class="h-auto w-6"
                      src="/img/twitterlogo.svg"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      class="h-auto w-6"
                      src="/img/youtubelogo.svg"
                      alt="youtube"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      class="h-auto w-6"
                      src="/img/instagramlogo.svg"
                      alt="instagam"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <p class="ml-4 mt-16 text-xs">
          © 2023 Paramount. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
