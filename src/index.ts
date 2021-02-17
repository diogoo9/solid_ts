import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";


const twitter: AbstractShareButton = new ShareButtonTwitter(".btn-twitter","google.com");
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(".btn-facebook","google.com");
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(".btn-linkedin","google.com");
linkedin.bind();

const shareButtonPrint = new ShareButtonPrint(".btn-print")
shareButtonPrint.bind();