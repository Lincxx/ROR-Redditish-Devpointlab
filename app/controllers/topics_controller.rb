class TopicsController < ApplicationController
    before_action :set_sub
    before_action :set_topic, only: [:show, :destroy, :update, :edit]

    def index
        render component: "Topics", props: {sub: @sub, topics: @sub.topics}
    end

    def show
        render component: "Topic", props: {sub: @sub, topic: @topic}
    end

    def new
        render component: "TopicNew", props: {sub: @sub}
    end

    def create 
        topic = @sub.topics.new(topic_parmas)
        if topic.save
            #show sub show
            #needs id
            redirect_to sub_topics_path(@sub.id)
        else
            #TODO deal with this later
        end
    end

    def edit 
        render component: "TopicEdit", props: {sub: @sub}
    end

    def destroy
        @topic.destroy
        #redirect_to
    end

    private 

    def topic_parmas
        params.require(:topic).permit(:body, :name)
    end
    
    def set_sub
        @sub = Sub.find(params[:sub_id])
    end

    def set_topic
        # this way is a little better because
        # This will only search for that specific subs topic
        @topic = @sub.topics.find(params[:id])
        # @topic = Topics.find(params[:id])
    end
end
