import { VChart } from "@visactor/react-vchart";
import { Card, Col, List, Progress, Row } from "@douyinfe/semi-ui";
import { IconChevronDown, IconChevronUp, IconHistogram, IconPlusCircle } from "@douyinfe/semi-icons";
import { useUserInfo } from "@/store/userStore";

const chart = {
  spec: {
    type: "pie",
    data: [
      {
        id: "id0",
        values: [
          { type: "oxygen", value: "46.60" },
          { type: "silicon", value: "27.72" },
          { type: "aluminum", value: "8.13" },
          { type: "iron", value: "5" },
          { type: "calcium", value: "3.63" },
          { type: "sodium", value: "2.83" },
          { type: "potassium", value: "2.59" },
          { type: "others", value: "3.5" },
        ],
      },
    ],
    valueField: "value",
    categoryField: "type",
    title: {
      visible: true,
      text: "Statistics of Surface Element Content",
    },
    legends: {
      visible: true,
      orient: "left",
      title: {
        visible: true,
        text: "Elements",
      },
    },
    label: {
      visible: true,
    },
  },
};
const line = {
  type: "line",
  data: {
    values: [
      { type: "Nail polish", country: "Africa", value: 4229 },
      { type: "Nail polish", country: "EU", value: 4376 },
      { type: "Nail polish", country: "China", value: 3054 },
      { type: "Nail polish", country: "USA", value: 12814 },
      { type: "Eyebrow pencil", country: "Africa", value: 3932 },
      { type: "Eyebrow pencil", country: "EU", value: 3987 },
      { type: "Eyebrow pencil", country: "China", value: 5067 },
      { type: "Eyebrow pencil", country: "USA", value: 13012 },
      { type: "Rouge", country: "Africa", value: 5221 },
      { type: "Rouge", country: "EU", value: 3574 },
      { type: "Rouge", country: "China", value: 7004 },
      { type: "Rouge", country: "USA", value: 11624 },
      { type: "Lipstick", country: "Africa", value: 9256 },
      { type: "Lipstick", country: "EU", value: 4376 },
      { type: "Lipstick", country: "China", value: 9054 },
      { type: "Lipstick", country: "USA", value: 8814 },
      { type: "Eyeshadows", country: "Africa", value: 3308 },
      { type: "Eyeshadows", country: "EU", value: 4572 },
      { type: "Eyeshadows", country: "China", value: 12043 },
      { type: "Eyeshadows", country: "USA", value: 12998 },
      { type: "Eyeliner", country: "Africa", value: 5432 },
      { type: "Eyeliner", country: "EU", value: 3417 },
      { type: "Eyeliner", country: "China", value: 15067 },
      { type: "Eyeliner", country: "USA", value: 12321 },
      { type: "Foundation", country: "Africa", value: 13701 },
      { type: "Foundation", country: "EU", value: 5231 },
      { type: "Foundation", country: "China", value: 10119 },
      { type: "Foundation", country: "USA", value: 10342 },
      { type: "Lip gloss", country: "Africa", value: 4008 },
      { type: "Lip gloss", country: "EU", value: 4572 },
      { type: "Lip gloss", country: "China", value: 12043 },
      { type: "Lip gloss", country: "USA", value: 22998 },
      { type: "Mascara", country: "Africa", value: 18712 },
      { type: "Mascara", country: "EU", value: 6134 },
      { type: "Mascara", country: "China", value: 10419 },
      { type: "Mascara", country: "USA", value: 11261 },
    ],
  },
  percent: true,
  xField: "type",
  yField: "value",
  seriesField: "country",
  animationAppear: {
    duration: 1500,
    easing: "linear",
  },
  legends: [{ visible: true, position: "middle", orient: "bottom" }],
  axes: [
    {
      orient: "left",
      label: {
        formatMethod(val) {
          return `${(val * 100).toFixed(2)}%`;
        },
      },
    },
  ],
};
const wordCloudSpec = {
  type: "wordCloud",
  nameField: "name",

  valueField: "value",
  maskShape:
    "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/shape_motuo_mini.png",
  rotateAngles: [0, 90],
  data: [
    {
      name: "source",
      values: [
        {
          name: "螺蛳粉",
          value: 957,
        },
        {
          name: "钵钵鸡",
          value: 942,
        },
        {
          name: "板栗",
          value: 842,
        },
        {
          name: "胡辣汤",
          value: 828,
        },
        {
          name: "关东煮",
          value: 665,
        },
        {
          name: "羊肉汤",
          value: 627,
        },
        {
          name: "热干面",
          value: 574,
        },
        {
          name: "肠粉",
          value: 564,
        },
        {
          name: "北京烤鸭",
          value: 554,
        },
        {
          name: "龟苓膏",
          value: 540,
        },
        {
          name: "米粉",
          value: 513,
        },
        {
          name: "灌肠",
          value: 499,
        },
        {
          name: "藕粉",
          value: 499,
        },
        {
          name: "烤冷面",
          value: 495,
        },
        {
          name: "炸酱面",
          value: 487,
        },
        {
          name: "臭豆腐",
          value: 484,
        },
        {
          name: "沙县小吃",
          value: 482,
        },
        {
          name: "重庆小面",
          value: 482,
        },
        {
          name: "冒菜",
          value: 479,
        },
        {
          name: "醪糟",
          value: 462,
        },
        {
          name: "肉夹馍",
          value: 456,
        },
        {
          name: "酸辣粉",
          value: 456,
        },
        {
          name: "驴打滚",
          value: 456,
        },
        {
          name: "煎饼果子",
          value: 443,
        },
        {
          name: "驴肉火烧",
          value: 443,
        },
        {
          name: "小笼包",
          value: 426,
        },
        {
          name: "烧麦",
          value: 425,
        },
        {
          name: "卤煮",
          value: 422,
        },
        {
          name: "油条",
          value: 414,
        },
        {
          name: "桂林米粉",
          value: 414,
        },
        {
          name: "兰州拉面",
          value: 409,
        },
        {
          name: "双皮奶",
          value: 408,
        },
        {
          name: "锅盔",
          value: 403,
        },
        {
          name: "羊肉泡馍",
          value: 403,
        },
        {
          name: "凉皮",
          value: 402,
        },
        {
          name: "糍粑",
          value: 397,
        },
        {
          name: "豆皮",
          value: 388,
        },
        {
          name: "粘豆包",
          value: 388,
        },
        {
          name: "过桥米线",
          value: 385,
        },
        {
          name: "叉烧",
          value: 375,
        },
        {
          name: "豆腐脑",
          value: 374,
        },
        {
          name: "豆汁",
          value: 363,
        },
        {
          name: "麻花",
          value: 363,
        },
        {
          name: "春卷",
          value: 354,
        },
        {
          name: "锅贴",
          value: 349,
        },
        {
          name: "韭菜盒子",
          value: 349,
        },
        {
          name: "面筋",
          value: 346,
        },
        {
          name: "南瓜饼",
          value: 343,
        },
        {
          name: "炒肝",
          value: 341,
        },
        {
          name: "文昌鸡",
          value: 338,
        },
      ],
    },
  ],
};
const todoData = [
  "从明天起，做一个幸福的人",
  "喂马，劈柴，周游世界",
  "从明天起，关心粮食和蔬菜",
];
const strokeArr = [
    { percent: 20, color: 'red' },
    { percent: 40, color: 'orange-9' },
    { percent: 60, color: 'light-green-8' },
    { percent: 80, color: 'hsla(125, 50%, 46% / 1)' }
];
export default function Dashboard() {
  const userInfo = useUserInfo();
  return (
    <div className="grid">
      <Row>
        <Col span={18}>
          <Card
            className="h-60 m-1 bg-gradient-to-r from-cyan-600 to-blue-700"
            shadows={"hover"}
          >
            <div className="flex flex-col font-bold text-xl text-white">
              <span >
                Welcome Back!👋
              </span>
              <span>{userInfo?.username}</span>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="h-60 m-1" shadows={"hover"}>
            <List
              className=" m-1 overflow-y-auto"
              header={<div className="font-bold">Todo</div>}
              bordered
              dataSource={todoData}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>

      <Row>
        <Card className=" m-1" shadows={"hover"}>
          <div className="flex justify-around">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-base">New Accounts</div>
                <div className="text-green-500 text-lg">
                  <IconChevronUp color="green" /> <span className="font-bold text-green-500">+10%</span>
                </div>
              </div>
              <div className="flex ml-5">
                <Progress
                  percent={35}
                  stroke={strokeArr}
                  type="circle"
                  showInfo={true}
                  style={{ margin: 5 }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-base">Total Expenses</div>
                <div className="text-green-500 text-lg">
                  <IconChevronDown className="text-red-300"/> <span className="font-bold text-red-300">-12%</span>
                </div>
              </div>
              <div className="flex ml-5">
                <Progress
                  percent={62}
                  stroke={strokeArr}
                  type="circle"
                  showInfo={true}
                  style={{ margin: 5 }}
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-base">Company Value</div>
                <div className="text-green-500 text-lg">
                  <IconHistogram color="green" /> <span className="font-bold text-green-500">1,45M</span>
                </div>
              </div>
              <div className="flex ml-5">
                <Progress
                  percent={45}
                  stroke={strokeArr}
                  type="circle"
                  showInfo={true}
                  style={{ margin: 5 }}
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center h-full">
                <div className="font-bold text-base">New Employees</div>
                <div className="text-green-500 text-lg">
                  <IconPlusCircle color="green" /> <span className="font-bold text-green-500">+34</span>
                </div>
              </div>
              <div className="flex ml-5">
                <Progress
                  percent={89}
                  stroke={strokeArr}
                  type="circle"
                  showInfo={true}
                  style={{ margin: 5 }}
                />
              </div>
            </div>
          </div>
        </Card>
      </Row>

      <Row>
        <Col span={8}>
          <Card shadows={"hover"} className="m-1">
            <VChart
              spec={{
                height: 400,
                ...chart.spec,
              }}
              option={{
                mode: "desktop-browser",
              }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <div className="">
            <Card className="m-1" shadows={"hover"}>
              <VChart
                spec={{ height: 400, ...line }}
                option={{
                  mode: "desktop-browser",
                }}
              />
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <div className="">
            <Card className="m-1" shadows={"hover"}>
              <VChart
                spec={{ height: 400, ...wordCloudSpec }}
                option={{
                  mode: "desktop-browser",
                }}
              />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}
