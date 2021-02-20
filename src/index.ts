import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";
import MockEentHandler from "./MockEentHandler";

const eventHandler = new MockEentHandler;


const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter","google.com");
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook","google.com");
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, ".btn-linkedin","google.com");
linkedin.bind();

const shareButtonPrint = new ShareButtonPrint(eventHandler, ".btn-print")
shareButtonPrint.bind();