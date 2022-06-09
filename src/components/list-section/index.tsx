import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
    {
        title: `软件产品孵化`,
        description: `Gen-X Tech富有创造力的专业及高效的团队致力于将您的创意转化成为成熟的软件产品。`,
    },
    {
        title: `项目实施`,
        description: `Gen-X Tech项目实施服务，根据您的业务需求及人员需求，运用Gen-X Tech快速开发框架，并重用已开发功能模块， 快速高效地进行项目实施，帮助您省时省钱。`,
    },
    {
        title: `知识产权服务`,
        description: `成功的知识产权申请及认证在软件产品或项目中扮演着至关重要的作用，Gen-X Tech拥有或共同拥有20+个软件创新专利。Gen-X Tech在过去的1年内，成功为我们的客户申请过近百个不同类型的知识产权。`,
    },
    {
        title: `用户体验 / 用户界面设计`,
        description: `Gen-X Tech 提供全方位的用户体验和用户界面设计服务，尤其是电脑 / 智能手机 / 平板电脑的交互设计、开发和视觉设计。我们拥有建立人性化、操作便捷的网站和应用的专业经验。`,
    },
];

const ListSection = () => (
    <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
            <div className={tw(`mb-16 text-center`)}>
                <h2 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>主营业务</h2>
                <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                    转化您的想法
                </p>
            </div>
            <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
                <div className={tw(`w-full lg:w-1/2 px-8`)}>
                    <ul className={tw(`space-y-12`)}>
                        {listItems.map((item, index) => (
                            <li className={tw(`flex -mx-4`)} key={item.title}>
                                <div className={tw(`px-4`)}>
                                    <span
                                        className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                                    >
                                        {index + 1}
                                    </span>
                                </div>
                                <div className={tw(`px-4`)}>
                                    <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                                    <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={tw(`w-full lg:w-1/2 px-8`)}>
                    <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
                        <FeatureSvg width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ListSection;
