import { getCssText } from 'stitches.config';

const StyleHeader = () => {
  const str = getCssText();

  return <style id='stitches' dangerouslySetInnerHTML={{ __html: str }} />;
};

export default StyleHeader;
