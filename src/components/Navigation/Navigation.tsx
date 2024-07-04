import React, { FC, ReactElement } from 'react';
import './Navigation.scss';
import { useTranslation } from 'react-i18next';

export const Navigation: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasNavbar"
          tabIndex={-1}
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Catalog
            </h5>
            <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  {t('navbar.home')}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  {' '}
                  {t('navbar.catalog')}{' '}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item">{t('navbar.notebook')}</a>
                  </li>
                  <li>
                    <a className="dropdown-item">{t('navbar.phone')}</a>
                  </li>
                  <li className="nav-item dropend">
                    <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      {t('navbar.accessories')}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item">{t('navbar.power')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item">{t('navbar.cable')}</a>
                      </li>
                      <li>
                        <a className="dropdown-item">{t('navbar.cover')}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">{t('navbar.about')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">{t('navbar.contact')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">{t('navbar.payment')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">{t('navbar.delivery')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
