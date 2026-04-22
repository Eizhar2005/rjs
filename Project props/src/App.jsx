import { Bookmark } from "lucide-react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuN5123uqVNfPq9ZaJQ8jlYpce9HeIuTVQTw&s",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "California, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7xbUVkLMh7-sCFxaXARD8-i9J68CjcPQnw&s",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/3840px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Canada",
    },
    {
      brandLogo:
        "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "USA",
    },
    {
      brandLogo:
        "https://yt3.googleusercontent.com/qgSeLfJk2OKnQicVDvc_VSlSISmAmWVHYtmSTckcC_iUn7hVfpURctMAqoSz0u4xfER6rlKDBA=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "UK",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vvZM_ZeV3PXWQrnV9PU5tPp-axrVNFxVdA&s",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Germany",
    },
    {
      brandLogo:
        "https://media.licdn.com/dms/image/v2/D560BAQHilaKdJueUVg/company-logo_200_200/B56ZodIp56HUAM-/0/1761425400480?e=2147483647&v=beta&t=-tNun5V2BRDck_2umtf0ZcPnEoaTicnbr3RnWud4Eag",
      companyName: "Adobe",
      datePosted: "1 day ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$40/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://m.media-amazon.com/images/I/51rttY7a+9L.png",
      companyName: "Spotify",
      datePosted: "5 days ago",
      post: "Mobile App Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Sweden",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n-ItkOkDows6Pk6aAo5MyGO7hEGjrWm9nw&s",
      companyName: "Uber",
      datePosted: "3 days ago",
      post: "Data Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$62/hr",
      location: "USA",
    },
  ];
  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <Card key={idx}
            company={elem.companyName}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            brandlogo={elem.brandLogo}
            datePosted={elem.datePosted}
          />
        );
      })}
    </div>
  );
};

export default App;
