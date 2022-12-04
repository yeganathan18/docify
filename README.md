<div align="center">
  <img src="./public/cover.png" height="140" alt="docify_cover" />
</div>

---

## What is docify 🍀

Docify is a decentralized, transparent and tamper proof application for document verification with polygon ID. The objective is to convert the zero knowledge proof from polygon ID to soul bound tokens. The application makes use of blockchain to transition from paper certificate to digital verifiable certificates.

(The idea was born during the hackathon [ETHIndia 2022](https://ethindia.co/), which we tried developing in **36 hours** 😛)
## Built With 🛠️

* **Lens protocol** to create the profile of user (Profile NFT)
* **Post functions** to list the offerings from other enterprises users
* **Polygon ID** for creating zero knowledge proof for KYC which is required for enterprices application
* **Biconomy SDK** to provide walletless login to less tech-savy users.
* Web app: **NextJS** + **TypeScript** + **Tailwind CSS**
* Smart contracts: **Solidity** + **Hardhat** + **Polygon**

## Done ✅

* [x] Social login with Biconomy SDK
* [x] Profile creation with Lens protocol
* [x] Post creation with Polygon ID
* [x] Post listing
* [x] Post verification with Polygon ID

## Pending Tasks 🫠

* [ ] Improve UI/UX all over the app
* [ ] Design a page for user profile
* [ ] Work on enterprise application

## How to run the app 🏃‍♂️

```bash

# 1. Clone the repo
git clone https://github.com/yeganathan18/docify.git

# 2. Install dependencies
cd docify
yarn install

# 3. Run the app, boom 💥
yarn dev
```

## Deployments 🚀

I hope the [vercel deployment](http://docify-three.vercel.app/) is live by the time you see, if not, you can still run the app locally.

## Contributing 🤝

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 📄

[MIT](https://choosealicense.com/licenses/mit/)