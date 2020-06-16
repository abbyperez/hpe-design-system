import React from 'react';
import Link from 'next/link';
import { Anchor } from 'grommet';
import { CardGrid, Meta, SubsectionText, BulletedList } from '../../components';
import {
  HeaderOnlyExample,
  HeaderFooterExample,
  SidebarHeaderExample,
  SidebarHeaderFooterExample,
} from '../../examples';
import { ContentSection, Example, Layout, Subsection } from '../../layouts';
import { getPageDetails } from '../../utils';

const title = 'Page Layouts';
const topic = 'Templates';
const pageDetails = getPageDetails(title);

const getRelatedCards = names =>
  names.sort().map(pattern => getPageDetails(pattern));

const PageLayouts = () => {
  return (
    <Layout title={title}>
      <Meta
        title={title}
        description={pageDetails.seoDescription}
        canonicalUrl="https://design-system.hpe.design/templates/page-layouts"
      />
      <ContentSection>
        <Subsection name={title} level={1} topic={topic}>
          <SubsectionText>{pageDetails.description}</SubsectionText>
          <SubsectionText>
            Depending on the context or purpose of an application, the page
            structure may vary. The following are common and recommended page
            layouts:
          </SubsectionText>
          <SubsectionText>
            <BulletedList
              items={[
                <Link href="#sidebar-header-and-footer" passHref>
                  <Anchor label="Page with sidebar, header, and footer" />
                </Link>,
                <Link href="#sidebar-and-header" passHref>
                  <Anchor label="Page with sidebar and header" />
                </Link>,
                <Link href="#header-and-footer" passHref>
                  <Anchor label="Page with header and footer" />
                </Link>,
                <Link href="#header-only" passHref>
                  <Anchor label="Page with header only" />
                </Link>,
              ]}
            />
          </SubsectionText>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Sidebar, header, and footer">
          <SubsectionText>
            Photo booth la croix tofu mumblecore vaporware edison bulb leggings
            affogato schlitz readymade polaroid air plant farm-to-table
            adaptogen stumptown.
          </SubsectionText>
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/page-layouts/SidebarHeaderFooterExample.js"
            width="100%"
            template
          >
            <SidebarHeaderFooterExample />
          </Example>
        </Subsection>
        <Subsection name="Relevant components" level={3}>
          <SubsectionText>
            For guidance on how to place components within these content areas,
            see the examples on these pages.
          </SubsectionText>
          <CardGrid
            cards={getRelatedCards(['Global Sidebar', 'Header', 'Footer'])}
          />
        </Subsection>
        <Subsection name="Sidebar and header">
          <SubsectionText>
            Photo booth la croix tofu mumblecore vaporware edison bulb leggings
            affogato schlitz readymade polaroid air plant farm-to-table
            adaptogen stumptown.
          </SubsectionText>
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/page-layouts/SidebarHeaderExample.js"
            width="100%"
            template
          >
            <SidebarHeaderExample />
          </Example>
        </Subsection>
        <Subsection name="Relevant components" level={3}>
          <SubsectionText>
            For guidance on how to place components within these content areas,
            see the examples on these pages.
          </SubsectionText>
          <CardGrid cards={getRelatedCards(['Global Sidebar', 'Header'])} />
        </Subsection>
        <Subsection name="Header and footer">
          <SubsectionText>
            Photo booth la croix tofu mumblecore vaporware edison bulb leggings
            affogato schlitz readymade polaroid air plant farm-to-table
            adaptogen stumptown.
          </SubsectionText>
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/page-layouts/HeaderFooterExample.js"
            width="100%"
            template
          >
            <HeaderFooterExample />
          </Example>
        </Subsection>
        <Subsection name="Relevant components" level={3}>
          <SubsectionText>
            For guidance on how to place components within these content areas,
            see the examples on these pages.
          </SubsectionText>
          <CardGrid cards={getRelatedCards(['Header', 'Footer'])} />
        </Subsection>
        <Subsection name="Header only">
          <SubsectionText>
            Photo booth la croix tofu mumblecore vaporware edison bulb leggings
            affogato schlitz readymade polaroid air plant farm-to-table
            adaptogen stumptown.
          </SubsectionText>
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/page-layouts/HeaderOnlyExample.js"
            width="100%"
            template
          >
            <HeaderOnlyExample />
          </Example>
        </Subsection>
        <Subsection name="Relevant components" level={3}>
          <SubsectionText>
            For guidance on how to place components within these content areas,
            see the examples on these pages.
          </SubsectionText>
          <CardGrid cards={getRelatedCards(['Header'])} />
        </Subsection>
      </ContentSection>
    </Layout>
  );
};

export default PageLayouts;
