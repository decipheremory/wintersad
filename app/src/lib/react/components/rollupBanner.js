import React, { PropTypes } from 'react';
import CapcoLite from 'capco-ui/lib/react/capcoLite';

export default class RollupBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { acm } = this.props;
    const bannerHeight = '20px';
    return (
      <div className='rollup-banner'
          style={{height: bannerHeight}}
      >
        {acm && acm.banner &&
          <CapcoLite acm={acm}
              style={{
                height: bannerHeight,
                display: 'block',
                padding: 0,
                textAlign: 'center',
                width: '100%',
                fontWeight: 100,
                fontFamily: 'Roboto, sans-serif'
              }}
          >
            <span>
              {acm.banner}
            </span>
          </CapcoLite>
        }
      </div>
    );
  }
}

RollupBanner.propTypes = {
  acm: PropTypes.object.isRequired
};
