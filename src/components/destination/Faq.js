import React, { Component } from "react";
import "../../assets/styles/landingPage/index.css";
import { Card, CardBody, CardHeader, Collapse, Button } from "reactstrap";
import PropTypes from "prop-types";

class Faq extends React.Component {
  state = {
    open: this.props.open,
  };

  toggleSection = index => () => {
    this.setState(({ open }) => ({
      open: index === open ? undefined : index,
    }));
  };

  render() {
    return (
      <div className="accordion faq-accordion">
        {React.Children.map(this.props.children, (child, index) => {
          if (child.type !== AccordionItem) return null;
          return React.cloneElement(child, {
            isOpen: child.props.open || this.state.open === index,
            onClick: this.toggleSection(index)
          });
        })}
      </div>
    );
  }
}

Faq.propTypes = {
  open: PropTypes.number,
};

const AccordionItem = ({ children, isOpen, onClick }) => (
  <Card>
    {React.Children.map(children, child => {
      if (child.type === AccordionHeader) {
        return React.cloneElement(child, { onClick });
      }

      if (child.type === AccordionBody) {
        return React.cloneElement(child, { isOpen });
      }

      return null;
    })}
  </Card>
);

const AccordionHeader = ({ children, onClick }) => (
  <CardHeader>
    <h5 className="mb-0">
      <Button color="link" onClick={onClick}>
        {children}
      </Button>
    </h5>
  </CardHeader>
);

const AccordionBody = ({ children, isOpen }) => (
  <Collapse isOpen={isOpen}>
    <CardBody>{children}</CardBody>
  </Collapse>
);

Faq.Item = AccordionItem;
Faq.Header = AccordionHeader;
Faq.Body = AccordionBody;

export default Faq