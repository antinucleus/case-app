import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import { UserDetailResponse } from '@/types';

type Props = UserDetailResponse;

export const UserDetail = ({ address, company, geo, ...rest }: Props) => {
  return (
    <ScrollView>
      {rest && (
        <List.Section>
          <List.Subheader>Personal Information</List.Subheader>
          <List.Item title="Name" description={rest.name} />
          <List.Item title="Username" description={rest.username} />
          <List.Item title="Email" description={rest.email} />
          <List.Item title="Phone" description={rest.phone} />
          <List.Item title="Website" description={rest.website} />
        </List.Section>
      )}

      {address && (
        <List.Section>
          <List.Subheader>Address</List.Subheader>
          <List.Item title="City" description={address.city} />
          <List.Item title="Street" description={address.street} />
          <List.Item title="Suite" description={address.suite} />
          <List.Item title="Zipcode" description={address.zipcode} />
        </List.Section>
      )}

      {company && (
        <List.Section>
          <List.Subheader>Company</List.Subheader>
          <List.Item title="Name" description={company.name} />
          <List.Item title="Buzzwords" description={company.bs} />
          <List.Item title="Slogan" description={company.catchPhrase} />
        </List.Section>
      )}
    </ScrollView>
  );
};
