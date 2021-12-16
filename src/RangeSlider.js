import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Slider from './Slider/Slider';
import Thumb from './Slider/components/Thumb';
import Rail from './Slider/components/Rail';
import RailSelected from './Slider/components/RailSelected';
import Notch from './Slider/components/Notch';
import Label from './Slider/components/Label';
import ThumbLeft from './Slider/components/ThumbLeft';
import ThumbRight from './Slider/components/ThumbRight';

const RangeSlider = ({range, floatingLabel = false, setPersantage}) => {
  const [low, setLow] = useState(0); // range slider seçili düşük değer
  const [high, setHigh] = useState(100); // range slider seçili yüksek değer
  const [min, setMin] = useState(0); // slider min değer
  const [max, setMax] = useState(100); // slider max değer
  const [floatingLabel_, setFloatingLabel] = useState(floatingLabel); // üstte çıkan bilgi kutucuğu float mı değil mi
  const [disableRange, setDisableRange] = useState(range); // true -> slider && false-> range slider

  const renderThumb = useCallback(() => <Thumb />, []); // sürükleme iconu
  const renderLeftThumb = useCallback(() => <ThumbLeft />, []); // sürükleme iconu
  const renderRightThumb = useCallback(() => <ThumbRight />, []); // sürükleme iconu
  const renderRail = useCallback(
    () => <Rail range={range ? false : true} />,
    [],
  ); // sürüklenen yoldaki çizgi
  const renderRailSelected = useCallback(() => <RailSelected />, []); // seçili olan kısmı gösteriyor
  // const renderLabel = useCallback(value => <Label text={value} />, []); // kaydırırken kaç olduğunu göstermek için
  // const renderNotch = useCallback(() => <Notch />, []); // basılı tutunca üstünde baloncuk ve arasındaki component
  const handleValueChange = useCallback((low, high) => {
    // Slider için low değeri kullanılabilir , range slider için ikiside
    range ? setPersantage(high - low) : setPersantage(low);
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View>
      <Slider
        min={min}
        max={max}
        step={1}
        disableRange={!disableRange}
        floatingLabel={floatingLabel_}
        renderThumb={renderThumb}
        renderLeftThumb={renderLeftThumb}
        renderRightThumb={renderRightThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </View>
  );
};

RangeSlider.defaultProps = {
  range: false,
};

export default RangeSlider;
