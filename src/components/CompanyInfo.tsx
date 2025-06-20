import React from 'react';

const CompanyInfo = () => {
  return (
<section id="company-info" className="py-20 bg-blue-50">
<div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm reveal">
            <img 
              src="lovable-uploads/One BMS~3.jpg"
              alt="Company Info 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm reveal">
            <img 
              src="lovable-uploads/Balancing Current.png"
              alt="Company Info 2"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
