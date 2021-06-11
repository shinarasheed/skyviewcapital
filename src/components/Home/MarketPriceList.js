import React from 'react';
import Title from '../Title';
import { priceList } from '../../data/pricelist';

const MarketPriceList = () => {
  return (
    <section className="marketPriceList">
      <Title title="nse market price list" />
      <article className="marketPriceList__section">
        {/* market statistics */}
        <div>
          <table>
            <thead>
              <tr className="Tabletitle">
                <th colSpan="2">Market Statistics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Index</td>
                <td>40,576.10</td>
              </tr>
              <tr>
                <td>Deals</td>
                <td>4,576.10</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>23,430,576.10</td>
              </tr>
              <tr>
                <td>Value</td>
                <td>1,123,130,576.10</td>
              </tr>
              <tr>
                <td>Market Cap</td>
                <td>40,576,879,456.10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* top gainers */}
        <div>
          <table>
            <thead>
              <tr className="Tabletitle">
                <th colSpan="4">TOP GAINERS - 24th May, 2021</th>
              </tr>
              <tr className="conetnts">
                <th>Company</th>
                <th>Prev</th>
                <th>Current</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {priceList.topGainers.map((company) => (
                <tr key={company.id}>
                  <td>{company.company}</td>
                  <td>${company.prev}</td>
                  <td>{company.current}</td>
                  <td>{company.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* top losers */}
        <div>
          <table>
            <thead>
              <tr className="Tabletitle">
                <th colSpan="4">TOP LOSERS - 24th May, 2021</th>
              </tr>
              <tr className="content">
                <th>Company</th>
                <th>Prev</th>
                <th>Current</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {priceList.topLosers.map((company) => (
                <tr key={company.id}>
                  <td>{company.company}</td>
                  <td>${company.prev}</td>
                  <td>{company.current}</td>
                  <td>{company.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default MarketPriceList;
