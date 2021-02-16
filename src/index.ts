import ShareButton from "./AbstractShareButton";

const shareButton = new ShareButton("http://www.youtube.com");
shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-facebook", "facebook");
shareButton.bind(".btn-linkedin", "linkedin");