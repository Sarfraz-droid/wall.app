import { IHighlightCard } from "../HighlightCard";
import { h1, h2, h3, h4, h5 } from "@/assets/highlights";
import { INFTCard } from "../NFTCard";
import { nft1, nft2, nft3, nft4, nft5 } from "@/assets/NFT";

export const hDetails: IHighlightCard[] = [
    {
        image: h1,
        blurColor: "#25B5D5",
        primaryColor: "#4BDFFF",
        title: "ENS Linked",
        subtitle: "ENS Linked",
        username: "dangling.eth",
        eth: 1.82,
        history: "2 months ago",
        xp: 200,
    },
    {
        image: h2,
        blurColor: "#F8A910",
        primaryColor: "#FFC148",
        title: "Best Flip",
        subtitle: "Sold",
        username: "CryptoPunk #2131",
        eth: 98.5,
        history: "10 days ago",
        xp: 150,
    },
    {
        image: h3,
        blurColor: "#0BF1AD",
        primaryColor: "#44FFC8",
        title: "Should have sold",
        subtitle: "Mint",
        username: "Rare Apepe #6974",
        eth: 98.5,
        history: "10 days ago",
        xp: 200,
    },
    {
        image: h4,
        blurColor: "#25B5D5",
        primaryColor: "#4BDFFF",
        title: "First NFT bought",
        subtitle: "Bought",
        username: "BAYC #7925",
        eth: 98.5,
        history: "10 days ago",
        xp: 10,
    },
    {
        image: h5,
        blurColor: "#0BF1AD",
        primaryColor: "#44FFC8",
        title: "Paper Handed",
        subtitle: "Sold",
        username: "Moonbird #7866",
        eth: 98.5,
        history: "10 days ago",
        xp: 10,
    },
];

export const nftDetails: INFTCard[] = [
    {
        image: nft1,
        brought: "02.82",
        floor: 12.74,
        title: "Azuki #9839",
        floorChange: 21.6
    },
    {
        image: nft2,
        brought: "02.82",
        floor: 12.74,
        floorChange: 21.6,
        title: "MATYC #9839"
    },
    {
        image: nft3,
        brought: "02.82",
        floor: 12.74,
        floorChange: 21.6,
        title: "MoonBirds #9839"
    },
    {
        image: nft4,
        brought: "02.82",
        floor: 12.74,
        floorChange: 21.6,
        title: "Otherdeed #9839"
    },
    {
        image: nft5,
        brought: "02.82",
        floor: 12.74,
        floorChange: 21.6,
        title: "Cryptoz #9839"
    }
]