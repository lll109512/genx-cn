import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
    background-color: #ffffff;
    min-height: calc(100vh - 6rem);
`;

const Header = () => (
    <header className={tw(headerStyle)}>
        <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
            <h1
                className={tw(
                    `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800 mt-5`,
                )}
            >
                Gen-X Tech
            </h1>
            <div className={tw(`max-w-xl mx-auto`)}>
                <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>用科技服务于商务与生活</p>
            </div>
            <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
                Gen-X Tech 拥有天生的创造性基因，致力于运用先进的计算机科学技术，服务并引领商务和生活。
                {/* <Button primary>Get started</Button> */}
                {/* <span className={tw(`mx-2`)}>or</span> */}
                {/* <Button>Contact us</Button> */}
            </div>
        </div>
        <div className={tw(`flex justify-center w-full`)}>
            <div className={tw(`mt-4 w-full`)}>
                <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>我们的客户</p>
                <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
                    <img alt="teamlink" src="/images/Teamlink.png" className={tw(`m-12 mb-8`)} width={120} />
                    <img alt="MC" src="/images/MC-1.png" className={tw(`m-12 mb-8`)} width={120} />
                    <img alt="Eagle plus" src="/images/EG.png" className={tw(`m-12 mb-8`)} width={120} />
                    <img alt="LEVO" src="/images/LEVO-1.png" className={tw(`m-12 mb-8`)} width={120} />
                    {/* <Netlify className={tw(`m-12`)} width={140} />
                    <Nike className={tw(`m-12`)} width={140} />
                    <Figma className={tw(`m-12`)} width={140} /> */}
                </div>
            </div>
        </div>
    </header>
);

export default Header;
