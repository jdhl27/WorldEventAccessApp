import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ParkingOption {
  option: string;
  applies: boolean;
  value?: number;
}

interface ParkingTableProps {
  options: ParkingOption[];
}

const ParkingTable: React.FC<ParkingTableProps> = ({options}) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Option</Text>
        <Text style={styles.headerText}>Applies</Text>
        <Text style={styles.headerText}>$</Text>
      </View>
      {options.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.option}</Text>
          <Text style={styles.cell}>{item.applies ? '✓' : '✗'}</Text>
          <Text style={styles.cell}>{item.value ? `${item.value}` : '-'}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
    width: '100%',
  },
  cell: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Gilroy-Medium',
  },
});

export default ParkingTable;
