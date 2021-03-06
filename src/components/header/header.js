import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '@Core';

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export { Header };