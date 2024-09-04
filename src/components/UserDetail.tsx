import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';

import { UserDetailResponse } from '@/types';

import { Loading } from './Loading';
import { MapModal } from './MapModal';

type Props = UserDetailResponse;

export const UserDetail = ({ address, company, ...rest }: Props) => {
  const [showMap, setShowMap] = useState(false);

  const handleOpenMap = () => setShowMap(true);

  return (
    <ScrollView>
      {rest ? (
        <List.Section>
          <List.Subheader>Personal Information</List.Subheader>
          <List.Item title="Name" description={rest.name} />
          <List.Item title="Username" description={rest.username} />
          <List.Item title="Email" description={rest.email} />
          <List.Item title="Phone" description={rest.phone} />
          <List.Item title="Website" description={rest.website} />
        </List.Section>
      ) : (
        <Loading />
      )}

      {address ? (
        <List.Section>
          <List.Subheader>Address</List.Subheader>
          <List.Item title="City" description={address.city} />
          <List.Item title="Street" description={address.street} />
          <List.Item title="Suite" description={address.suite} />
          <List.Item title="Zipcode" description={address.zipcode} />
          <List.Item
            right={() => <List.Icon color={MD3Colors.primary40} icon="chevron-right-circle" />}
            title="Geo"
            description="Show location"
            onPress={handleOpenMap}
          />
        </List.Section>
      ) : (
        <Loading />
      )}

      {address ? (
        <MapModal
          lat={+address.geo.lat}
          lng={+address.geo.lng}
          showModal={showMap}
          setShowModal={setShowMap}
        />
      ) : (
        <Loading />
      )}

      {company ? (
        <List.Section>
          <List.Subheader>Company</List.Subheader>
          <List.Item title="Name" description={company.name} />
          <List.Item title="Buzzwords" description={company.bs} />
          <List.Item title="Slogan" description={company.catchPhrase} />
        </List.Section>
      ) : (
        <Loading />
      )}
    </ScrollView>
  );
};
