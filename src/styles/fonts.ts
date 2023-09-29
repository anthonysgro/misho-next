import { Inter } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const dmSans = DM_Sans({ subsets: ["latin"] });

export { dmSans, mavenPro, inter, poppins };
