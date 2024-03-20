export default function Footer() {
    return (
      <footer class="bg-background text-textgrey">
        <div class="gap-8 flex flex-col justify-center items-center pt-3 lg:hidden lg:opacity-0">
        <img src='/img/cbslogo.svg' alt="logo cbs"/>
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
        <div class="hidden ml-4  py-16 z-[-16] lg:block lg:static">
        <img class="ml-4 pb-2" src='/img/cbslogo.svg' alt="logo cbs"/>
        <div class="flex justify-start items-start gap-40 mt-2 ml-4">
            <ul class="flex flex-col justify-center items-start gap-2">
                <li>
                <h2 class="text-sm text-white  flex justify-start">Site Navigation</h2> 
            </li>
                <li> 
                    <a class="text-xs" href="#">Home</a>
                </li>  
                <li>
                    <a class="text-xs" href="#">Shows</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Live TV</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Schedule</a>
                </li>
                <li>
                    <a class="text-xs" href="#">TV Provider</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Paramount +</a>
                </li>
                <li>
                    <a class="text-xs" href="#">CBS News</a>
                </li>
                <li>
                    <a class="text-xs" href="#">CBS Sports</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Shop</a>
                </li>
            </ul>
            <ul class="flex flex-col justify-center items-start gap-2">
                <li>
                <h2 class="text-sm text-white ">Privacy & Terms</h2>
            </li> 
                <li>
                    <a class="text-xs" href="#">Terms of Use</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Privacy Policy</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Gérer les cookies</a>
                </li>
            </ul>
            <ul class="flex flex-col justify-center items-start gap-2">
                <li>
                <h2 class="text-sm text-white ">Information</h2> 
            </li>
                <li>
                    <a class="text-xs" href="#">Help/Contact Us</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Show Feedback</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Casting</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Closed Captioning</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Video Description</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Ratings Guidelines</a>
                </li>
                <li>
                    <a class="text-xs" href="#">About Paramount</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Careers</a>
                </li>
                <li>
                    <a class="text-xs" href="#">Anti-Bias Statement</a>
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
                        <img class="w-6 h-auto" src='/img/facebooklogo.svg' alt="facebook"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="w-6 h-auto" src='/img/twitterlogo.svg' alt="twitter"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="w-6 h-auto" src='/img/youtubelogo.svg' alt="youtube"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="w-6 h-auto" src='/img/instagramlogo.svg' alt="instagam"/>
                    </a>
                </li>
            </ul>
            </li>
            </ul>
        </div>
            <p class="text-xs ml-4 mt-16">© 2023 Paramount. All rights reserved.</p>
        </div>
    </footer>
    );
  }