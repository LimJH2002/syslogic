import PropTypes from "prop-types";
import { default as React } from "react";

const FeatureSectionRight = ({ items }) => {
  return (
    <div className="overflow-hidden bg-white pb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="text-center lg:text-left lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {items.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {items.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {items.services.map((feature) => (
                  <div key={feature.name} className="text-left pl-2">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-orange-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>
                      <br />
                    </div>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-center mt-6 lg:mt-0">
            <img
              src={items.image}
              alt="Product screenshot"
              className="w-[25rem] rounded-xl sm:w-[30rem] lg:ml-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureSectionRight.propTypes = {
  items: PropTypes.object.isRequired,
};

export default FeatureSectionRight;
