import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";


const shareButtonTwitter = new ShareButtonTwitter(".btn-twitter","google.com");
shareButtonTwitter.bind();

const shareButtonFacebook = new ShareButtonFacebook(".btn-facebook","google.com");
shareButtonFacebook.bind();

const shareButtonLinkedin = new ShareButtonLinkedin(".btn-linkedin","google.com");
shareButtonLinkedin.bind();