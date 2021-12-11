import TestCover1 from "../images/test-cover-1.png"
import TestCover2 from "../images/test-cover-2.png"
import TestCover3 from "../images/test-cover-3.png"

export const TEST_VIDEO = {
  title: "video 1",
  src: TestCover1,
  plays: " 6M",
  upload_date: "Oct 10th",
  likes: "100k",
  shares: "100k",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
}
export const TEST_USER = { name: "Test User", followers: "12k" }
export const TEST_TAGS = [
  { label: "#fashion" },
  { label: "#black-girl-magic" },
  { label: "#trans-pride" },
]

export const TEST_VIDEOS = [
  {
    title: "video 1",
    src: TestCover1,
    plays: " 6M",
    upload_date: "Oct 10th",
    likes: '100k',
    shares:'100k',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  },
  {
    title: "video 2",
    src: TestCover2,
    plays: " 86M",
    upload_date: "Oct 10th",
  },
  {
    title: "video 2",
    src: TestCover3,
    plays: " 86M",
    upload_date: "Oct 10th",
  },
  {
    title: "video 1",
    src: TestCover1,
    plays: " 6M",
    upload_date: "Oct 10th",
  },
  {
    title: "video 2",
    src: TestCover2,
    plays: " 86M",
    upload_date: "Oct 10th",
  },
  {
    title: "video 2",
    src: TestCover3,
    plays: " 86M",
    upload_date: "Oct 10th",
  },
]

export const TEST_PLAYLISTS = [
  {
    title: "playlist 1",
    content: [
      { src: TestCover1, plays: " 8.3M", upload_date: "Nov 10th" },
      { src: TestCover2, plays: " 7.3M", upload_date: "Apr 23rd" },
      { src: TestCover3, plays: " 86M", upload_date: "Oct 10th" },
    ],
  },
  {
    title: "playlist 2",
    content: [
      { src: TestCover1, plays: " 8.3M", upload_date: "Nov 10th" },
      { src: TestCover2, plays: " 7.3M", upload_date: "Apr 23rd" },
      { src: TestCover3, plays: " 86M", upload_date: "Oct 10th" },
      { src: TestCover1, plays: " 8.3M", upload_date: "Nov 10th" },
      { src: TestCover2, plays: " 7.3M", upload_date: "Apr 23rd" },
      { src: TestCover3, plays: " 86M", upload_date: "Oct 10th" },
    ],
  },
  {
    title: "playlist 3",
    content: [
      { src: TestCover1, plays: " 8.3M", upload_date: "Nov 10th" },
      { src: TestCover2, plays: " 7.3M", upload_date: "Apr 23rd" },
      { src: TestCover3, plays: " 86M", upload_date: "Oct 10th" },
    ],
  },
]
