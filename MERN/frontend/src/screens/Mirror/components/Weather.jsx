import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'b77ce27445f43561b68d75e5bfed52f5',
    lat: '41.485070',
    lon: '-71.529790',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#000000',
	gradientMid:  '#00000f',
	gradientEnd:  '#0f000f',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  '#000',
	forecastSeparatorColor:  '#000',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#AAA'
};
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
export default Weather;