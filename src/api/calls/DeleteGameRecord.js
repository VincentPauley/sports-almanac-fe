import API from '../index'

const DeleteGameRecord = async recordId => {
  const result = await API.delete(/game-record/ + recordId)

  console.log('just the data please')
  console.log(result)
}

export default DeleteGameRecord
