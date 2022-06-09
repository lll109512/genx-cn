import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = [`特点`, `客户`, `平台`];
const aboutLinks = [`关于GenX`, `加入我们`];
const resourceLinks = [`开始`, `指导`, `工具`, `解决方案`, `FAQs`];

const Footer = () => (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
        <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
            <div className={tw(`mb-14 flex items-center w-full`)}>
                <img className={tw(`h-14 mr-4`)} src="GenXs.png" alt="logo" />
                <p className={tw(`text-4xl text-primary font-bold`)}>Gen-X</p>
            </div>
            {/* <div className={tw(`w-full lg:w-1/2`)}>
                <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
                    <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
                        <div>
                            <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>产品</h4>
                            <ul>
                                {productLinks.map((link) => (
                                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                                        <a href="/">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
                        <div>
                            <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>资源</h4>
                            <ul>
                                {resourceLinks.map((link) => (
                                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                                        <a href="/">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
                        <div>
                            <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>关于我们</h4>
                            <ul>
                                {aboutLinks.map((link) => (
                                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                                        <a href="/">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div> */}
            <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
                <div className={tw(`rounded`)}>
                    <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>联系方法</h4>
                    <div>
                        <p className={tw(`text-gray-800`)}>陕西省西安市碑林区南二环西段西安创新设计中心1003</p>
                        <p className={tw(`text-gray-800 my-1`)}>
                            lll1095<div className={tw(`inline`)}>12@outlook.com</div>
                        </p>
                        <p className={tw(`text-gray-800`)}>
                            +86 150<div className={tw(`inline`)}>29575560</div>
                        </p>
                    </div>
                    {/* <div className={tw(`flex w-full`)}>
                        <input
                            aria-label="email address"
                            type="text"
                            className={tw(
                                `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                            )}
                            placeholder="Enter your email"
                        />
                        <Button>Subscribe</Button>
                    </div> */}
                </div>
            </div>
            {/* <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
                <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
                    <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
                    <div className={tw(`flex w-full`)}>
                        <input
                            aria-label="email address"
                            type="text"
                            className={tw(
                                `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                            )}
                            placeholder="Enter your email"
                        />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div> */}
        </div>
    </footer>
);

export default Footer;
