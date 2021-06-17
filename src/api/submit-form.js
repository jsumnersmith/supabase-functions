import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)
const handler = async (req, res) => {
  let submission = JSON.parse(req.body);
  console.log("Submission is:", submission);
  const { data, error } = await supabase
    .from('submissions')
    .insert([
      { ...submission }
    ]);
  if (error) {
    return res.status(500).json(error);
  }
  return res.status(200).send(data);
}

export default handler;


