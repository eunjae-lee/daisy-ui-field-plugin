import { FunctionComponent, useState } from 'react'
import { useFieldPlugin } from '../../useFieldPlugin'
import { Asset } from '@storyblok/field-plugin'

const AssetSelector: FunctionComponent = () => {
  const {
    actions: { selectAsset },
  } = useFieldPlugin()

  const [asset, setAsset] = useState<Asset | undefined>()

  const handleSelectAsset = async () => {
    setAsset(await selectAsset())
  }

  const removeAsset = async () => {
    setAsset(undefined)
  }

  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Asset Selector</h2>
      {asset && (
        <img
          src={asset.filename}
          title="Selected Asset"
        />
      )}
      {asset && (
        <button
          className="btn w-full"
          onClick={removeAsset}
        >
          Remove Asset
        </button>
      )}
      {!asset && (
        <button
          className="btn w-full"
          onClick={handleSelectAsset}
        >
          Select Asset
        </button>
      )}
    </div>
  )
}

export default AssetSelector
