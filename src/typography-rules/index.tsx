
const TypographyRules = () => {
  return (
    <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-6">
            <p className="text-2xl text-gray-800">Rule 1: The body text of the application will be the main font of the app and this will be the most amount of content that your user will read so get that first of all.</p>
            <div className="grid w-full grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] items-stretch gap-8">
                <div className="flex flex-col ">
                    <h2>Before</h2>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia, veniam debitis ipsam inventore molestiae suscipit cumque sequi consectetur libero unde dignissimos obcaecati. Doloribus obcaecati dicta consequuntur laborum neque! Corporis minima iure reprehenderit nihil. Doloremque, ea suscipit, officiis perspiciatis necessitatibus quas dolore temporibus tempore assumenda, labore asperiores nulla et iusto.</p>
                </div>
                <div className="w-px shrink-0 self-stretch bg-gray-300"></div>
                <div className="flex flex-col ">
                    <h2>After</h2>
                    <p className="text-sm leading-normal text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia, veniam debitis ipsam inventore molestiae suscipit cumque sequi consectetur libero unde dignissimos obcaecati. Doloribus obcaecati dicta consequuntur laborum neque! Corporis minima iure reprehenderit nihil. Doloremque, ea suscipit, officiis perspiciatis necessitatibus quas dolore temporibus tempore assumenda, labore asperiores nulla et iusto.</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            <p className="text-2xl text-gray-800">Rule 2: The line height, it should always be in between 1.2 to 2.0 and do not use pixel values as they will not scale properly on different devices</p>
            <div className="grid w-full grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] items-stretch gap-8">
                <div className="flex flex-col ">
                    <h2>Before</h2>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia, veniam debitis ipsam inventore molestiae suscipit cumque sequi consectetur libero unde dignissimos obcaecati. Doloribus obcaecati dicta consequuntur laborum neque! Corporis minima iure reprehenderit nihil. Doloremque, ea suscipit, officiis perspiciatis necessitatibus quas dolore temporibus tempore assumenda, labore asperiores nulla et iusto.</p>
                </div>
                <div className="w-px shrink-0 self-stretch bg-gray-300"></div>
                <div className="flex flex-col ">
                    <h2>After</h2>
                    <p className="text-gray-800 leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia, veniam debitis ipsam inventore molestiae suscipit cumque sequi consectetur libero unde dignissimos obcaecati. Doloribus obcaecati dicta consequuntur laborum neque! Corporis minima iure reprehenderit nihil. Doloremque, ea suscipit, officiis perspiciatis necessitatibus quas dolore temporibus tempore assumenda, labore asperiores nulla et iusto.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TypographyRules