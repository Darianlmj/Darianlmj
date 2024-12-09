import { getCssText } from 'portfolio-v2/stitches.config'

const StyleHeader = () => {
  const str = getCssText()

  return <style id="stitches" dangerouslySetInnerHTML={{ __html: str }} />
}

export default StyleHeader
