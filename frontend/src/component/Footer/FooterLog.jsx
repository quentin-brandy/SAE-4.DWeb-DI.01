export default function FooterLog() {
  return (
    <footer class="bottom-0 w-full bg-textwhite text-textgrey">
      <div class="mb-10 flex flex-col items-center justify-center gap-4 pt-3 lg:hidden lg:opacity-0">
        <img src="/img/cbslogogrey.svg" alt="logo cbs" />
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
      <div class="z-[-16] hidden items-center py-4 lg:static lg:flex lg:flex-col lg:justify-center lg:gap-4">
        <div class="mt-2 flex justify-center gap-40">
          <ul className="flex flex-wrap gap-6 ">
            <li>
              <a className="text-xs"> Terms of Use </a>
            </li>
            <li>
              <a className="text-xs"> Privacy Policy </a>
            </li>
            <li>
              <a className="text-xs"> Gérer les cookies </a>
            </li>
            <li>
              <a className="text-xs"> Closed Captioning </a>
            </li>
            <li>
              <a className="text-xs"> Anti-Bias Statement </a>
            </li>
          </ul>
        </div>
        <p className="text-xs">© 2023 Paramount. All rights reserved.</p>
      </div>
    </footer>
  );
}
