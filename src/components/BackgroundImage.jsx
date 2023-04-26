import PropTypes from 'prop-types';

export function BackgroundImage({ children }) {
    BackgroundImage.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return <div className="background">{children}</div>;
}
