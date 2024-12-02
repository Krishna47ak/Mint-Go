// src/UserProfile.jsx
import React, { useEffect, useState } from "react";
import user from "/user.png";
import nft1 from "../../assets/nft1.png";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import Health from "../Health/Health"; // Add this line
import UnityCanvas from "../UnityCanvas";
import { Transaction } from "@mysten/sui/transactions";
import { bcs } from "@mysten/sui/bcs";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";

const chartData = [
  { date: "2024-04-01", steps: 222 },
  { date: "2024-04-02", steps: 97 },
  { date: "2024-04-03", steps: 167 },
  { date: "2024-04-04", steps: 242 },
  { date: "2024-04-05", steps: 373 },
  { date: "2024-04-06", steps: 301 },
  { date: "2024-04-07", steps: 245 },
  { date: "2024-04-08", steps: 409 },
  { date: "2024-04-09", steps: 59 },
  { date: "2024-04-10", steps: 261 },
  { date: "2024-04-11", steps: 327 },
  { date: "2024-04-12", steps: 292 },
  { date: "2024-04-13", steps: 342 },
  { date: "2024-04-14", steps: 137 },
  { date: "2024-04-15", steps: 120 },
  { date: "2024-04-16", steps: 138 },
  { date: "2024-04-17", steps: 446 },
  { date: "2024-04-18", steps: 364 },
  { date: "2024-04-19", steps: 243 },
  { date: "2024-04-20", steps: 89 },
  { date: "2024-04-21", steps: 137 },
  { date: "2024-04-22", steps: 224 },
  { date: "2024-04-23", steps: 138 },
  { date: "2024-04-24", steps: 387 },
  { date: "2024-04-25", steps: 215 },
  { date: "2024-04-26", steps: 75 },
  { date: "2024-04-27", steps: 383 },
  { date: "2024-04-28", steps: 122 },
  { date: "2024-04-29", steps: 315 },
  { date: "2024-04-30", steps: 454 },
  { date: "2024-05-01", steps: 165 },
  { date: "2024-05-02", steps: 293 },
  { date: "2024-05-03", steps: 247 },
  { date: "2024-05-04", steps: 385 },
  { date: "2024-05-05", steps: 481 },
  { date: "2024-05-06", steps: 498 },
  { date: "2024-05-07", steps: 388 },
  { date: "2024-05-08", steps: 149 },
  { date: "2024-05-09", steps: 227 },
  { date: "2024-05-10", steps: 293 },
  { date: "2024-05-11", steps: 335 },
  { date: "2024-05-12", steps: 197 },
  { date: "2024-05-13", steps: 197 },
  { date: "2024-05-14", steps: 448 },
  { date: "2024-05-15", steps: 473 },
  { date: "2024-05-16", steps: 338 },
  { date: "2024-05-17", steps: 499 },
  { date: "2024-05-18", steps: 315 },
  { date: "2024-05-19", steps: 235 },
  { date: "2024-05-20", steps: 177 },
  { date: "2024-05-21", steps: 82 },
  { date: "2024-05-22", steps: 81 },
  { date: "2024-05-23", steps: 252 },
  { date: "2024-05-24", steps: 294 },
  { date: "2024-05-25", steps: 201 },
  { date: "2024-05-26", steps: 213 },
  { date: "2024-05-27", steps: 420 },
  { date: "2024-05-28", steps: 233 },
  { date: "2024-05-29", steps: 78 },
  { date: "2024-05-30", steps: 340 },
  { date: "2024-05-31", steps: 178 },
  { date: "2024-06-01", steps: 178 },
  { date: "2024-06-02", steps: 470 },
  { date: "2024-06-03", steps: 103 },
  { date: "2024-06-04", steps: 439 },
  { date: "2024-06-05", steps: 88 },
  { date: "2024-06-06", steps: 294 },
  { date: "2024-06-07", steps: 323 },
  { date: "2024-06-08", steps: 385 },
  { date: "2024-06-09", steps: 438 },
  { date: "2024-06-10", steps: 155 },
  { date: "2024-06-11", steps: 92 },
  { date: "2024-06-12", steps: 492 },
  { date: "2024-06-13", steps: 81 },
  { date: "2024-06-14", steps: 426 },
  { date: "2024-06-15", steps: 307 },
  { date: "2024-06-16", steps: 371 },
  { date: "2024-06-17", steps: 475 },
  { date: "2024-06-18", steps: 107 },
  { date: "2024-06-19", steps: 341 },
  { date: "2024-06-20", steps: 408 },
  { date: "2024-06-21", steps: 169 },
  { date: "2024-06-22", steps: 317 },
  { date: "2024-06-23", steps: 480 },
  { date: "2024-06-24", steps: 132 },
  { date: "2024-06-25", steps: 141 },
  { date: "2024-06-26", steps: 434 },
  { date: "2024-06-27", steps: 448 },
  { date: "2024-06-28", steps: 149 },
  { date: "2024-06-29", steps: 103 },
  { date: "2024-06-30", steps: 446 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  steps: {
    label: "Steps",
    color: "black",
  },
};

const nfts = [
  {
    id: 1,
    title: "Apprentice Achiever",
    image: <UnityCanvas />,
    description: "This is a description for NFT 1.",
  },
  // { id: 2, title: "Intermediate", image: {nft1}, description: "This is a description for NFT 2." },
  // { id: 3, title: "Achiever", image: {nft1}, description: "This is a description for NFT 3." },
];

const UserProfile = () => {
  const [timeRange, setTimeRange] = useState("90d");
  const [profileData, setProfileData] = useState([])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  const suiClient = useSuiClient();
  const {
    mutate: signAndExecute,
    isSuccess,
    isPending,
  } = useSignAndExecuteTransaction();
  const handleMintNFT = async () => {
    try {
      const tx = new Transaction();

      // Define static data
      const name = bcs
        .vector(bcs.U8)
        .serialize(new TextEncoder().encode("Charmender"));
      const description = bcs
        .vector(bcs.U8)
        .serialize(
          new TextEncoder().encode(
            "Charmander is a small, dinosaur-like Pokémon with a flame on the tip of its tail. It evolves into Charmeleon at level 16."
          )
        );
      const url = bcs
        .vector(bcs.U8)
        .serialize(new TextEncoder().encode("https://example.com/nft.png"));
      const characterId =
        "0x3b87db4f8cae9e35ffb6df2e55946761e2820cc651eeeac80745680fd1b8f1a5"; // Use the provided address
      const characterLevel = bcs.U64.serialize(1); // Example level

      // Add a Move call to the transaction
      tx.moveCall({
        target: `0x6b81f967d2d2d95cdc8fc1e7ee37958b5940bc40e853ff00f22d6fd5e5e5c42b::mint_go_::mint_to_sender`,
        arguments: [
          tx.pure(name),
          tx.pure(description),
          tx.pure(url),
          tx.object(characterId),
          tx.pure(characterLevel),
        ],
      });

      signAndExecute(
        {
          transaction: tx,
        },
        {
          onSuccess: async ({ digest }) => {
            const { effects } = await suiClient.waitForTransaction({
              digest: digest,
              options: {
                showEffects: true,
              },
            });
          },
        },
      );

      console.log("Minting successful");
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const StatCard = ({ icon, label, value }) => {
    return (
      <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center h-[8rem] mt-6">
        <div className="text-3xl mb-2">{icon}</div>
        <p className="text-sm font-medium text-gray-300 mb-1 w-auto text-nowrap">
          {label}
        </p>
        <p className="text-xl font-bold text-white w-auto">{value}</p>
      </div>
    );
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://mint-go.onrender.com/api/v1/user/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: '674d48a39482e00f3e632bd6'
          }),
        });

        const responseJson = await response.json();

        if (!responseJson.success) {
          throw new Error('Failed to fetch data');
        }

        setProfileData(responseJson?.user)

        // alert('Success', 'Your track has been saved successfully!');
      } catch (error) {
        console.error('Error saving track:', error);
        alert('Error', 'Failed to save your track. Please try again.');
      }
    }

    if (profileData?.length == 0) {
      fetchProfile()
    }

  }, [profileData])

  return (
    <>
      <div className="bg-gradient-to-t from-[#f17f55] py-16 min-h-screen px-10 to-[#8046c3]">
        {/* User Card */}
        <div className="flex flex-row space-x-5 h-[35rem]">
          <div className="flex flex-col justify-between rounded-lg  mt-0 p-6 mx-auto backdrop-blur-xl w-[40%]">
            <div className="mt-30 flex justify-center gap-4">
              <div className="relative">
                <img
                  src={profileData?.img}
                  className="rounded-full w-60 h-6w-60 relative z-10"
                />
              </div>
            </div>
            <div className="mt-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-black">{profileData?.name}</h1>
              <Health
                totalSteps={profileData?.stepCount}
                totalDistance="56 km"
                totalCalories="2,345kc"
                activeTime="3.5 hrs"
              />
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-lg  p-6 mx-auto w-[60%]">
            <Card className="bg-transparent h-[30rem]">
              <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                  <CardDescription className="text-black">
                    Showing total steps for the last 3 months
                  </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger
                    className="w-[160px] rounded-lg sm:ml-auto"
                    aria-label="Select a value"
                  >
                    <SelectValue placeholder="Last 3 months" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="90d" className="rounded-lg">
                      Last 3 months
                    </SelectItem>
                    <SelectItem value="30d" className="rounded-lg">
                      Last 30 days
                    </SelectItem>
                    <SelectItem value="7d" className="rounded-lg">
                      Last 7 days
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                  config={chartConfig}
                  className="aspect-auto w-full h-[22rem]"
                >
                  <AreaChart className="h-[30rem]" data={filteredData}>
                    <defs>
                      <linearGradient
                        id="fillSteps"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="5%" stopColor="white" stopOpacity={0.8} />
                        <stop
                          offset="95%"
                          stopColor="black"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      minTickGap={32}
                      tick={{ fill: "blue" }} // Change the text color here
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            });
                          }}
                          indicator="dot"
                        />
                      }
                    />
                    <Area
                      dataKey="steps"
                      type="natural"
                      fill="url(#fillSteps)"
                      stroke="white"
                      stackId="a"
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="text-2xl font-bold text-center text-white mb-6">
            Mint NFTs
          </div>
          <button
            onClick={handleMintNFT}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
          >
            Mint NFT
          </button>
        </div>
        {/* NFT Data */}

        <div className="mt-20 mx-auto ">
          <p className="text-center mb-2 text-white font-bold">POKEMON</p>
          <div className="flex mx-auto items-center justify-center overflow-hidden h-[500px] w-[500px] rounded-[2rem]" >
            <UnityCanvas />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
