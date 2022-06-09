import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
    <section className={tw(`bg-white pb-6`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
            <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
                <div className={tw(`mb-16 text-center`)}>
                    <h4 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>技术方案</h4>
                    <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
                        我们如何改变世界
                    </p>
                </div>
                <div className={tw(`flex flex-wrap my-12`)}>
                    <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
                        <div className={tw(`flex items-center mb-6`)}>
                            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary`)} />
                            <div className={tw(`ml-4 text-xl`)}>Rapid-X</div>
                        </div>
                        <p className={tw(`leading-loose text-gray-500`)}>全栈快速网站/手机应用开发框架</p>
                    </div>
                    <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
                        <div className={tw(`flex items-center mb-6`)}>
                            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary`)} />
                            <div className={tw(`ml-4 text-xl`)}>DevOps-X</div>
                        </div>
                        <p className={tw(`leading-loose text-gray-500 `)}>全面的自动化DevOps运维框架</p>
                    </div>
                    <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
                        <div className="flex items-center mb-6">
                            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary`)} />
                            <div className={tw(`ml-4 text-xl`)}>Unit-X</div>
                        </div>
                        <p className={tw(`leading-loose text-gray-500`)}>自动测试框架</p>
                    </div>
                    <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
                        <div className={tw(`flex items-center mb-6`)}>
                            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary`)} />
                            <div className={tw(`ml-4 text-xl`)}>Bot-X</div>
                        </div>
                        <p className={tw(`leading-loose text-gray-500`)}>
                            Bot-X 是 Gen-X Tech
                            开发的专家机器人框架，可以基于您的专业领域知识及数据，打造具有专业技能的人工智能领域专家辅助商业计算及业务处理，帮您最大化实现市场价值。
                        </p>
                    </div>
                    <div
                        className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}
                    >
                        <div className={tw(`flex items-center mb-6`)}>
                            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary`)} />
                            <div className={tw(`ml-4 text-xl`)}>GBT-X (GoBIX)</div>
                        </div>
                        <p className={tw(`leading-loose text-gray-500`)}>
                            财富金砖解决方案
                            GBT-X（GoBIX）致力于利用先进的区块链和人工智能技术，打造实时的碎片化房产通证交易及管理平台。
                        </p>
                    </div>
                    <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
                        <div className={tw(`flex items-center mb-6`)}>
                            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-primary`)} />
                            <div className={tw(`ml-4 text-xl`)}>DII-X</div>
                        </div>
                        <p className={tw(`leading-loose text-gray-500`)}>
                            Gen-X Tech
                            的数据智能解决方案运用多种数据科技、大数据、数据挖掘、数据分析、人工智能和数据可视化技术帮助您实现全方位的商业数据智能。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FeatureSection;
