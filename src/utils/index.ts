import type {
  AdviceMockItemType,
  FooterLinksType,
  HeroCarouselType,
  InfoMockItemType,
  PathProfileType,
  PostMockItemType,
  TitleCategoryType,
} from "../@types";
import post from "../assets/imgs/post.png";
import post1 from "../assets/imgs/post1.png";
import post2 from "../assets/imgs/post2.png";
import post3 from "../assets/imgs/post3.png";
import info from "../assets/imgs/info.png";
import info1 from "../assets/imgs/info1.png";
import vektor from "../assets/imgs/vektor.png";
import advice from "../assets/imgs/advice.png";
import advice1 from "../assets/imgs/advice1.png";
import advice2 from "../assets/imgs/advice2.png";
import {
  EnvironmentOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AccountDetails from "../components/profile/profile-pages/account-details";
import MyPorducts from "../components/profile/profile-pages/my-products";
import Adress from "../components/profile/profile-pages/adress";
import Wishlist from "../components/profile/profile-pages/wishlist";
import TrackOrder from "../components/profile/profile-pages/track-order";
export const hero_carousel: HeroCarouselType[] = [
  {
    id: 1,
    title: "Le’s Make a Better",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 2,
    title: "LET'S LIVE IN A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "LE'TS START",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 3,
    title: "LET'S OBSERVE A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "GET CREDITS",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
];
export const title_category: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arriwals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];
export const post_item: PostMockItemType[] = [
  {
    id: 1,
    title: "Cactus & Succulent Care Tips",
    subTitle: "September 12  I Read in 6 minutes",
    description:
      "Cacti are succulents are easy care plants for any home or patio. ",
    img: post,
  },
  {
    id: 2,
    title: "Top 10 Succulents for Your Home",
    subTitle: "September 12  I Read in 6 minutes",
    description: "Best in hanging baskets. Prefers medium to high light.",
    img: post1,
  },
  {
    id: 3,
    title: "Cacti & Succulent Care Tips",
    subTitle: "September 15  I Read in 3 minutes",
    description:
      "Cacti and succulents thrive in containers and because most are.. ",
    img: post2,
  },
  {
    id: 4,
    title: "Best Houseplants Room by Room",
    subTitle: "September 15  I Read in 2 minutes",
    description: "The benefits of houseplants are endless. In addition to..",
    img: post3,
  },
];

export const info_item: InfoMockItemType[] = [
  {
    id: 0,
    title: "Summer cactus & succulents",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info,
    vektor,
  },
  {
    id: 1,
    title: "STYLING TRENDS & MUCH MORE",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info1,
    vektor,
  },
];
export const footer_links: FooterLinksType[] = [
  {
    id: 1,
    title: "My Account",
    link1: "My Account",
    link2: "Address",
    link3: "Wishlist",
  },
  {
    id: 2,
    title: "Categories",
    link1: "House Plants",
    link2: "Potter Plants",
    link3: "Seeds",
    link4: "Small Plants",
    link5: "Accessories",
  },
];
export const advice_item: AdviceMockItemType[] = [
  {
    id: 0,
    title: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice,
    border: false,
  },
  {
    id: 1,
    title: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice1,
    border: true,
  },
  {
    id: 2,
    title: "Watering Graden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice2,
    border: true,
  },
];
export const path_profile: PathProfileType[] = [
  {
    id: 1,
    path: "",
    Icon: UserOutlined,
    title: "Account Details",
    Components: AccountDetails,
  },
  {
    id: 2,
    path: "my-products",
    Icon: ShoppingOutlined,
    title: "My Products",
    Components: MyPorducts,
  },
  {
    id: 3,
    path: "address",
    Icon: EnvironmentOutlined,
    title: "Adress",
    Components: Adress,
  },
  {
    id: 4,
    path: "wishlist",
    Icon: HeartOutlined,
    title: "Wishlist",
    Components: Wishlist,
  },
  {
    id: 5,
    path: "track-order",
    Icon: UnorderedListOutlined ,
    title: "Track Order",
    Components: TrackOrder,
  },
];
