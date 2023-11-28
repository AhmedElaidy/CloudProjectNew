import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { makeStyles, useTheme } from "@material-ui/styles";
import IconText from "Components/IconText";
import NavLink from "../Components/NavLink";
import clsx from "clsx";
import UseStore from "Store/StoreContext";
import { withRouter } from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  const { cart, user } = UseStore();
  const { userRole } = user;

  const RegularUserLinks = () => {
    return (
      <Fragment>
        <NavLink linkAdress="/Men">Men</NavLink>
        <NavLink linkAdress="/Women">Women</NavLink>
        <NavLink linkAdress="/Kids">Kids</NavLink>
      </Fragment>
    );
  };

  const renderRegularUserLinks = () => {
    if (userRole.toLowerCase() === "regular") {
      return <RegularUserLinks />;
    }
    return null;
  };

  const renderDesignerLinks = () => {
    if (userRole.toLowerCase() === "designer") {
      return (
        <Fragment>
          <RegularUserLinks />
          <NavLink linkAdress="/my-designs">My Designs</NavLink>
        </Fragment>
      );
    }
    return null;
  };
  const renderAdminLinks = () => {
    if (userRole.toLowerCase() === "admin") {
      return (
        <Fragment>
          <NavLink linkAdress="/add-product">Add Product</NavLink>
          <NavLink linkAdress="/pending-designs">Pending Designs</NavLink>
        </Fragment>
      );
    }
    return null;
  };
  return (
    <Navbar className={classes.root} bg="light" expand="lg">
      <Container className="p-0" fluid="fluid">
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="w-100 m-0" xs={12}>
            <Col
              className="align-items-center 
    justify-content-lg-start 
            justify-content-xl-start 
            justify-content-center 
            d-flex"
              xs={12}
              lg={3}
            >
              {userRole.toLowerCase() === "admin" ? (
                <Navbar.Brand href="/clothingstore/pending-designs">
                  <img src={`${process.env.PUBLIC_URL}/icons/logo/logo.svg`} />
                </Navbar.Brand>
              ) : (
                <Navbar.Brand href="/clothingstore/">
                  <img src={`${process.env.PUBLIC_URL}/icons/logo/logo.svg`} />
                </Navbar.Brand>
              )}
            </Col>
            <Col className="align-items-center d-flex" xs={12} lg={6}>
              <Row
                className="d-flex m-0 
            position-relative
            justify-content-xl-center 
        justify-content-lg-center 
        justify-content-md-center 
        justify-content-sm-center 
        justify-content-start w-100"
              >
                {renderRegularUserLinks()}
                {renderAdminLinks()}
                {renderDesignerLinks()}
              </Row>
            </Col>
            <Col
              className="align-items-center 
              justify-content-center 
              justify-content-lg-end 
              justify-content-xl-end 
            flex-column
            flex-xl-row
            flex-lg-row
            d-flex"
              xs={12}
              lg={3}
            >
              <Nav.Link href="/clothingstore/auth"></Nav.Link>
              <NavLink linkAdress="/auth">
                <IconText
                  icon="/icons/user/userGrey.svg"
                  text="Login / Register"
                />
              </NavLink>
              <NavLink linkAdress="/cart">
                <IconText
                  cart={cart.length}
                  icon="/icons/cart/cartGrey.svg"
                  text="Cart"
                />
              </NavLink>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
      <div className="d-flex justify-content-center w-100">
        <Navbar.Toggle
          className={clsx(classes.toggleButton, {
            "position-absolute ": true,
          })}
          aria-controls="basic-navbar-nav"
        />
      </div>
    </Navbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent!important",
    flexFlow: "column",
    padding: "0 6px ",
  },
  toggleButton: {
    top: 4,
    right: 2,
    lineHeight: "28px",
    zIndex: "1111",
    height: 35,
    "& span": {
      verticalAlign: "baseline",
      height: 25,
    },
  },
}));

export default withRouter(Header);
