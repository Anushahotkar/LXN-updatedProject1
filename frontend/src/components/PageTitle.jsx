import React from 'react';

const PageTitle = ({ title, subtitle }) => (
  <div className="mb-6 animate-fadeIn">
    <h1 
      className="
        text-2xl sm:text-3xl lg:text-4xl 
        font-medium tracking-tight 
        text-textDark dark:text-textLight
      "
    >
      {title}
    </h1>

    {subtitle && (
      <p 
        className="
          text-sm sm:text-base text-textMuted 
          mt-2 max-w-2xl leading-relaxed
        "
      >
        {subtitle}
      </p>
    )}

    {/* Decorative divider for visual structure */}
    <div className="mt-3 w-16 h-1 bg-primaryAccent dark:bg-primaryAccent rounded-full"></div>
  </div>
);

export default PageTitle;
