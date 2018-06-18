import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../settings';
import { getUsernameFromUrl } from '../../../src/helpers/utility';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to={"/" + getUsernameFromUrl() + "/dashboard"}>
              <i className={siteConfig.siteIcon} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to={"/" + getUsernameFromUrl() + "/dashboard"}>{siteConfig.siteName}</Link>
        </h3>
      )}
    </div>
  );
};
