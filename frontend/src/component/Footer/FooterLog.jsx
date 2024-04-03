export default function FooterLog() {
    return (
      <footer class="bg-textwhite w-full bottom-0 text-textgrey">
        <div class="gap-4 flex flex-col justify-center items-center pt-3 lg:hidden lg:opacity-0 mb-10">
        <img src='/img/cbslogogrey.svg' alt="logo cbs"/>
        <div>
            <a class=" text-sm" href="#">Terms of use</a>   
            <a class=" text-sm" href="#"> | Privacy Policy</a> 
  <br/> <a class=" text-sm flex justify-center" href="#">| Gérer les cookies</a>
        </div>
        <ul class="flex justify-center items-center gap-8">
            <li>
                <a href="#">
                    <img class="w-5 h-auto" src='/img/facebooklogo.svg' alt="facebook"/>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="w-5 h-auto" src='/img/twitterlogo.svg' alt="twitter"/>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="w-5 h-auto" src='/img/youtubelogo.svg' alt="youtube"/>
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="w-5 h-auto" src='/img/instagramlogo.svg' alt="instagam"/>
                </a>
            </li>
        </ul>
        <p class="text-xs mb-2">© 2023 Paramount. All rights reserved.</p>
        </div>
        <div class="hidden py-4 z-[-16] lg:flex lg:flex-col items-center lg:justify-center lg:gap-4 lg:static">
        <div class="flex justify-center gap-40 mt-2">
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