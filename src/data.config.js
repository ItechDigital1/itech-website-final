/*{http://192.168.0.100:300}*/
// images
import OEMPartner from "./assets/images/img/logo/Dell-logo.jpg";
import Sonicwall from "./assets/images/img/logo/Sonicwall-logo.jpg";
import Poly from "./assets/images/img/logo/Poly-logo.jpg";
import MumbaiPolice from "./assets/images/img/logo/Mumbai-police-logo.jpg";
// videos
import PowerOn from "./assets/videos/Power-On-Off.mp4";
import DongleBay from "./assets/videos/Dongle-Bay.mp4";
import CableBay from "./assets/videos/Cable-Bay.mp4";
import DriveRead from "./assets/videos/Drive-Read-Write-Bays-Lock.mp4";
// Carousel
import Clonester from "./assets/images/img/Clonester.jpg";
import Lapster from "./assets/images/img/Lapster.jpg";
import Vaultster from "./assets/images/img/Vaultster.jpg";
import DesksterX from "./assets/images/img/Deskster-X.jpg";
import GraphsterT from "./assets/images/img/Graphster-T.jpg";
import RacksterDC from "./assets/images/img/Rackster-DC.jpg";
import Telster from "./assets/images/img/Telster.jpg";
import Cubester from "./assets/images/img/Cubester-X.jpg";
import Labster from "./assets/images/img/Labster.jpg";
import CubesterX from "./assets/images/img/Cubester-X.jpg";
import DesksterClassic from "./assets/images/img/Deskster-Classic.png";
import DesksterXTRaid from "./assets/images/img/Deskster-XT-Raid.jpg";
import DesksterXADR from "./assets/images/img/Deskster-X-ADR.png";
import Trackster from "./assets/images/img/Trackster.jpg";
import RoadsterX from "./assets/images/img/Roadster-X.jpg";
import Roadster from "./assets/images/img/Roadster.jpg";
import GraphsterRServer from "./assets/images/img/Graphster-R-Server.jpg";
import RacksterMC from "./assets/images/img/Rackster-MC.jpg";
import DesksterDual from "./assets/images/img/Deskster-Dual.jpg";
import DesksterLite from "./assets/images/img/Deskster-Lite.jpg";
import DesksterServer from "./assets/images/img/Deskster-Server.jpg";
//
import DigitalForensic from "./assets/images/img/testimonial/digital-forensic.jpg";
import Vinay from "./assets/images/img/testimonial/Vinay.jpg";
import Ashish from "./assets/images/img/testimonial/Ashish.jpg";
import Girish from "./assets/images/img/testimonial/Girish.jpg";
const asso = [
  {
    id: 1,
    image: OEMPartner,
    title: "OEM Partner's",
  },
  {
    id: 2,
    image: Sonicwall,
    title: "Solution Partner's",
  },
  {
    id: 3,
    image: Poly,
    title: "VC Solution",
  },
  {
    id: 4,
    image: MumbaiPolice,
    title: "Prestigeous Client",
  },
];

const highlights = [
  {
    id: 1,
    sym: <i class="fa fa-map"></i>,
    name: "Improved USB Transfer Speed",
    desc: "For Super Speed USB data transfer.",
  },
  {
    id: 2,
    sym: <i class="fa fa-shopping-bag"></i>,
    name: "4TB Memory Support",
    desc: "Ensuring high memory scalabality..",
  },
  {
    id: 3,
    sym: <i class="fa fa-bar-chart"></i>,
    name: "SAS Compatible Bays",
    desc: "High End SAS III support bays.",
  },
  {
    id: 4,
    sym: <i class="fa fa-picture-o"></i>,
    name: "Key Lockable Dongle Bay",
    desc: "Secure Dongles from unauthorised access.",
  },
  {
    id: 5,
    sym: <i class="fa fa-map"></i>,
    name: "All SAS III 12Gbps",
    desc: "High Speed SAS III bays.",
  },
  {
    id: 6,
    sym: <i class="fa fa-shopping-bag"></i>,
    name: "Key Lockable Cables Bay ",
    desc: "Secures Cables from getting misplaced or replaced.",
  },
  {
    id: 7,
    sym: <i class="fa fa-bar-chart"></i>,
    name: "Adjustable Camera",
    desc: "To record video of click photographs of forensic evidences.",
  },
  {
    id: 8,
    sym: <i class="fa fa-picture-o"></i>,
    name: "Ticket Based Call Logging",
    desc: "Quick support by just logging into our portal and raise request.",
  },
  {
    id: 9,
    sym: <i class="fa fa-map"></i>,
    name: "High speed NVMe, M.2 and SSD",
    desc: "SSD Enables super fast booting and caching of forensic cases.",
  },
  {
    id: 10,
    sym: <i class="fa fa-shopping-bag"></i>,
    name: "Upgradable models in series",
    desc: "Highly scalable and upgradable in almost all variants.",
  },
  {
    id: 11,
    sym: <i class="fa fa-bar-chart"></i>,
    name: "Key Lock for System Power On",
    desc: "Single key based Secure access to the workstation.",
  },
  {
    id: 12,
    sym: <i class="fa fa-picture-o"></i>,
    name: "Optimize Raid Ability",
    desc: "Multiple RAID configuration support such as RAID 0,1,5,6,10.",
  },
  {
    id: 13,
    sym: <i class="fa fa-map"></i>,
    name: "All Machine are Extensively tested",
    desc: "  To run high end forensic applications at their peak performance.",
  },
  {
    id: 14,
    sym: <i class="fa fa-shopping-bag"></i>,
    name: "Multi Machine Connect",
    desc: "To ensure enabling multiple cases through each client in a less period of time.",
  },
  {
    id: 15,
    sym: <i class="fa fa-bar-chart"></i>,
    name: "4 X 4 Multiple Drive Parallel Cloning",
    desc: "  High Speed Multiple Drive cloning to speed up time consuming acquisition process.",
  },
  {
    id: 16,
    sym: <i class="fa fa-picture-o"></i>,
    name: "Server Connect",
    desc: "Enabling super fast processing of forensic caeses with centralised processing and storage..",
  },
  {
    id: 17,
    sym: <i class="fa fa-shopping-bag"></i>,
    name: "Designed &amp; Built by Industry experts",
    desc: "Tailor-made design and configuration to run forensic applications seamlessly.",
  },
  {
    id: 18,
    sym: <i class="fa fa-bar-chart"></i>,
    name: "Designed for Parallel processing",
    desc: "To enable forensic experts to run multiple applications simultaneosly and seamlessly.",
  },
];

const features = [
  {
    id: 1,
    video_src: PowerOn,
  },
  {
    id: 2,
    video_src: DongleBay,
  },
  {
    id: 3,
    video_src: CableBay,
  },
  {
    id: 4,
    video_src: DriveRead,
  },
];

const products = [
  { id: 1, name: "Clonester" },
  { id: 2, name: "Cubester" },
  { id: 3, name: "Lapster" },
  { id: 4, name: "Labster" },
  { id: 5, name: "Graphster" },
  { id: 6, name: "Deskster" },
  { id: 7, name: "Roadster" },
  { id: 8, name: "Rackster" },
  { id: 9, name: "Telster" },
  { id: 10, name: "Vaultster" },
  { id: 11, name: "Trackster" },
];

const data = [
  {
    src: Clonester,
    name: "Clonester",
    id: "1",
    class: "img-fluid",
    alt: "Clonester, Hand Held Ruggedised Forensic Imaging Device",
  },
  {
    src: Cubester,
    name: "Cubester",
    id: "2",
    class: "img-fluid",
    alt: "Cubester, Hand Held Ruggedised Forensic Imaging Device",
  },
  {
    src: Lapster,
    name: "Lapster",
    id: "3",
    class: "img-fluid",
    alt: "Lapster, is an High End Fast Forensic Laptop.",
  },
  {
    src: Labster,
    name: "Labster",
    id: "4",
    class: "img-fluid",
    alt: "High End Console based Audio/Video Forensic Workstation",
  },
  {
    src: Vaultster,
    name: "Vaultster",
    id: "3",
    class: "img-fluid",
    alt: "Cubester, Forensics Micro Workstation",
  },
  {
    src: DesksterX,
    name: "Deskster",
    id: "4",
    class: "img-fluid",
    alt: "Deskster-X, High End Extended Forensic Workstation",
  },
  {
    src: GraphsterT,
    name: "Graphster",
    id: "5",
    class: "img-fluid",
    alt: "Graphster-R Server, High End Cryptanalysis Server",
  },
  {
    src: RacksterDC,
    name: "Rackster",
    id: "6",
    class: "img-fluid",
    alt: "Labster, High End Console based Audio/Video Forensic Workstation",
  },
  {
    src: Telster,
    name: "Telster",
    id: "7",
    class: "img-fluid",
    alt: "Rackster-DC, Full Tower Rack High Performance and Storage Solution",
  },
];

const software = [
  {
    id: 1,
    head: "Forensic Case Management Software",
    sub_head:
      "ITECH Forensic case management software is equipped with a lot of features:",

    list: [
      <ul>
        <li>1] Role-based access for each process.</li>
        <li>
          2] In-built Video Recording, Photo and Screen Capture options to
          Record Evidence Seal Opening and Device Condition on receipt.
        </li>
        <li>3] Provide Receipt Challan to the Evidence delivery person.</li>
        <li>4] Full Evidence Tracking and Chain of Custody Management.</li>
        <li>5] Complete Task Management.</li>
        <li>6] Information Management.</li>
        <li>7] Forensic and Case Reporting.</li>
      </ul>,
    ],
  },
  {
    id: 2,
    head: "Link Tracer",
    sub_head: "The features offered by Link Tracer are as follows:",

    list: [
      <ul>
        <li>
          1] Troubleshoot Network Connectivity Issues and Trace the root cause
          with Colour Code representation.
        </li>
        <li>
          2] Server to Client and vice versa solutions available to trace the
          issues in the connectivity.
        </li>
        <li>
          3] Customisation options along with Company Logo available for Tracing
          specific range of IP addresses, Subnets and Supernets.
        </li>
        <li>
          4] Custom Designed and can be deployed in any workstation or server.
        </li>
      </ul>,
    ],
  },
  {
    id: 3,
    head: "Essential Disk Forensic Suite",
    sub_head:
      "Here are some features of Essential Disk Forensic Suite software:",

    list: [
      <ul>
        <li>1] EDFS is a pre forensics disk application.</li>
        <li>
          2] This application plays an important role in the intial process of
          disk forensics which includes disk health, disk wipe, disk prepare,
          disk imaging, disk cloning and disk restore.
        </li>
        <li>
          3] This initial disk pre-check process is crucial as it helps save
          time and effort in case the disk on to which the data is either cloned
          or imaged fails or has bad sector areas then the entire process needs
          to be intimated onto another disk.
        </li>
      </ul>,
    ],
  },
];

const New = [
  {
    id: 1,
    head: "Blockster - Mini Forensic Write Blocker - Made and Manufactured In INDIA",
    desc: "Our Mini Field Write Blocker is in the Final Phase of Production and will be out soon",
  },
  {
    id: 2,
    head: "Deskster -X Add-Ons",
    desc: "Several Add-Ons will be released from Multiple Cooling Trays, Mouse Pads, Mouses, Keyboards, Triple Monitors etc",
  },
  {
    id: 3,
    head: "Intelligent Case Management Software with Block-Chain",
    desc: "Introduction of Blockchain Technology in Forensic Case Management is work in Progress.",
  },
  {
    id: 4,
    head: "Made and Manufactured In INDIA - Forensic Write Blocker (Internal Bridges)",
    desc: "Forensic Write Blocker Bridges are in Final testing Phase and will be released soon.",
  },
];

const Images = [
  {
    src: Clonester,
    name: "Clonester",
    description: "Clonester, Hand Held Ruggedised Forensic Imaging Device",
  },
  {
    src: Cubester,
    name: "Cubester",
    description: "Cubester, Forensics Micro Workstation",
  },
  {
    src: CubesterX,
    name: "Cubester X",
    description: "Cubester X, Forensic Dual Micro Workstation",
  },
  {
    src: DesksterClassic,
    name: "Deskster Classic",
    description: "Deskster Classic, High End Forensic Workstation",
  },
  {
    src: DesksterDual,
    name: "Deskster Dual",
    description: "Deskster Dual, High End Forensic Workstation",
  },
  {
    src: DesksterLite,
    name: "Deskster-Lite",
    description: "Deskster-Lite, Standard Forensic Workstation",
  },
  {
    src: DesksterServer,
    name: "Deskster-Server",
    description: "Deskster-Server, High End Forensic Rack Server",
  },
  {
    src: DesksterX,
    name: "Deskster-X",
    description: "Deskster-X, High End Extended Forensic Workstation",
  },
  {
    src: GraphsterRServer,
    name: "Graphster-R Server",
    description: "Graphster-R Server, High End Cryptanalysis Server",
  },
  {
    src: GraphsterT,
    name: "Graphster-T",
    description: "Graphster-T, High End Cryptanalysis Workstation",
  },
  {
    src: Lapster,
    name: "Lapster",
    description: "Lapster, High End Forensic Laptop",
  },
  {
    src: RacksterDC,
    name: "Rackster-DC",
    description:
      "Rackster-DC, Full Tower Rack High Performance and Storage Solution",
  },
  {
    src: RacksterMC,
    name: "Rackster-MC",
    description:
      "Rackster-MC, Mini Tower Rack High Performance and Storage Solution",
  },
  {
    src: Roadster,
    name: "Roadster",
    description: "Roadster, High End Mobile Forensics Workstation",
  },
  {
    src: RoadsterX,
    name: "Roadster-X",
    description: "Roadster-X, High End Extended Mobile Forensics Workstation",
  },
  {
    src: Trackster,
    name: "Trackster",
    description: "Trackster, OTG Field Investigation and Surveillance Vehicle",
  },
  {
    src: Vaultster,
    name: "Vaultster",
    description: "Vaultster, High Capacity Direct Attached Storage RAID",
  },
  {
    src: DesksterXADR,
    name: "Deskster-X-ADR",
    description: "Deskster-X-ADR, High End Advanced Forensic Workstation",
  },
  {
    src: DesksterXTRaid,
    name: "Deskster-XT-Raid",
    description:
      "Deskster-XT-Raid, High End Extended Forensic Workstation with High Capacity Storage",
  },
  {
    src: Labster,
    name: "Labster",
    description:
      "Labster, High End Console based Audio/Video Forensic Workstation",
  },
  {
    src: Telster,
    name: "Telster",
    description: "Telster, High Performance Cluster",
  },
];

const Testimonials = [
  {
    src: DigitalForensic,
    can_name: "DFSL",
    position: "Cyber Forensic Division, DFSL, Mumbai, Maharshtra",
    text: [
      "We are using Deskster- X Forensic Workstation for 10 months now. Excellent and Useful Cabinet Design, mainly for Dongle Protection. Supperfast Transfer Speed between Devices. Mainly No Hardware failures, No Software Hanging and Sturdy for several hours use. Importantly long awaited solution for VIP, DVR Examiner and especially NUIX.",
    ],
  },
  {
    src: Vinay,
    can_name: "Vinay Vishwanth",
    position: "Associates Vice-President Lab Systems (I) Pvt. Ltd.",
    text: [
      "Deskster- X has provided us with a Fantastic Infrastructure Support for Video Forensics. Time taken for regular tasks like, Event / Object / Face Detection, Enhacement of CCTV Footage and Identification of tampering in Videos, have been very well Optimised Hardware-wise. This has helped in reduceing time & Resources Required in Solving Video Investigation Cases.",
    ],
  },
  {
    src: Girish,
    can_name: "Girish Firke",
    position: "Senior Forensic Expert Grab Data",
    text: [
      "It is extremely fast in Processing cases in Intella and Magnet Axiom Forensic Applications but NUIX was Pleasant Suprise. Used regularly in majority of our cases to extract evidence data. Along with this the form factor design, user Experience, Physical security of the workstation and accessories provides uninterrrupted case processing which is what makes this a unique workstation.",
    ],
  },
  {
    src: Ashish,
    can_name: "Ashish Rathod",
    position: "Senior Forensic Expert Consultant",
    text: [
      "I used Deskster- X Forensic Workstation for Video Forensics Applications like Kenesis, Impact Pro and Mandate. The initial Process of Video Import which involves frame grabbing was Super Fast compared to other Workstations. Thus Creating a Huge time difference in getting the case resolved. An Important Feature is its High CPU and RAM along with Dedicated High GPU and SSD cache, it is able to withstand multiple Processing of Various Forensic Applications running parallel without any glitch.",
    ],
  },
];
export {
  asso,
  highlights,
  features,
  products,
  data,
  software,
  New,
  Images,
  Testimonials,
};
